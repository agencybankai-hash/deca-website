"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  tall?: boolean;
}

interface GalleryLightboxProps {
  items: GalleryItem[];
  alt: string;
  badge?: string;
  title?: string;
  subtitle?: string;
}

export default function GalleryLightbox({ items, alt, badge, title, subtitle }: GalleryLightboxProps) {
  const [open, setOpen] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [padLeft, setPadLeft] = useState(24);

  /* Measure header left offset to perfectly align carousel with content */
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setPadLeft(rect.left);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* ── Drag state ── */
  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const DRAG_THRESHOLD = 6; // px — only count as drag if moved beyond this

  const scrollToSlide = useCallback((index: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;
    if (index === 0) {
      track.scrollTo({ left: 0, behavior: smooth ? "smooth" : "instant" });
      return;
    }
    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;
    const paddingLeft = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    track.scrollTo({ left: slide.offsetLeft - paddingLeft, behavior: smooth ? "smooth" : "instant" });
  }, []);

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    setCurrent(clamped);
    scrollToSlide(clamped);
  }, [items.length, scrollToSlide]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  /* ── Detect current slide on scroll ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const paddingLeft = parseFloat(getComputedStyle(track).paddingLeft) || 0;
        const scrollPos = track.scrollLeft + paddingLeft;
        const slides = Array.from(track.children) as HTMLElement[];
        let closestIdx = 0;
        let closestDist = Infinity;
        slides.forEach((child, i) => {
          const dist = Math.abs(child.offsetLeft - scrollPos);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = i;
          }
        });
        setCurrent(closestIdx);
      }, 80);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => { track.removeEventListener("scroll", onScroll); clearTimeout(timeout); };
  }, []);

  useEffect(() => {
    scrollToSlide(0, false);
  }, [scrollToSlide]);

  /* ── Mouse drag handlers ── */
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    didDrag.current = false;
    dragStartX.current = e.clientX;
    scrollStartX.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > DRAG_THRESHOLD) {
      didDrag.current = true;
    }
    trackRef.current.scrollLeft = scrollStartX.current - dx;
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // Snap to nearest slide
    const track = trackRef.current;
    if (!track) return;
    const paddingLeft = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    const scrollPos = track.scrollLeft + paddingLeft;
    const slides = Array.from(track.children) as HTMLElement[];
    let closestIdx = 0;
    let closestDist = Infinity;
    slides.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - scrollPos);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = i;
      }
    });
    goTo(closestIdx);
  };

  /* ── Touch drag handlers ── */
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    didDrag.current = false;
    dragStartX.current = e.touches[0].clientX;
    scrollStartX.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    if (Math.abs(dx) > DRAG_THRESHOLD) {
      didDrag.current = true;
    }
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  const handleSlideClick = (i: number) => {
    // Only open lightbox if it wasn't a drag
    if (!didDrag.current) {
      setOpen(i);
    }
  };

  return (
    <>
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── Header: left-aligned ── */}
        {(badge || title) && (
          <div className="mb-8">
            {badge && (
              <span className="text-xs font-semibold tracking-wider uppercase text-brand">{badge}</span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-1">{title}</h2>
            )}
            {subtitle && (
              <p className="text-text-secondary mt-2 max-w-xl">{subtitle}</p>
            )}
          </div>
        )}
      </div>

      {/* ── Carousel: full-bleed with left-aligned start ── */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-2 cursor-grab active:cursor-grabbing select-none"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingLeft: `${padLeft}px`,
            paddingRight: `${padLeft}px`,
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => handleSlideClick(i)}
              className="shrink-0 snap-start rounded-2xl overflow-hidden cursor-pointer group relative"
              style={{ width: "min(80vw, 960px)" }}
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={`${alt} ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 85vw, 960px"
                  draggable={false}
                />
                {/* Subtle gradient overlay for better button visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </button>
          ))}
        </div>

        {/* Navigation arrows — inside the active image area */}
        <div
          className="absolute top-0 left-0 right-0 bottom-2 pointer-events-none flex items-center"
          style={{
            paddingLeft: `${padLeft}px`,
          }}
        >
          <div className="relative pointer-events-auto" style={{ width: "min(80vw, 960px)" }}>
            <button
              onClick={prev}
              disabled={current === 0}
              className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-text-primary transition-all disabled:opacity-0 disabled:pointer-events-none z-10 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={next}
              disabled={current === items.length - 1}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-text-primary transition-all disabled:opacity-0 disabled:pointer-events-none z-10 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox overlay */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + items.length) % items.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % items.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <Image
            src={items[open].src}
            alt={`${alt} ${open + 1}`}
            width={1400}
            height={900}
            className="max-h-[85vh] max-w-[92vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {open + 1} / {items.length}
          </div>
        </div>
      )}
    </>
  );
}
