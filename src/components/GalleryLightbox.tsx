"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  tall?: boolean;
}

export default function GalleryLightbox({ items, alt }: { items: GalleryItem[]; alt: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  // Scroll to the current slide (+1 for left spacer)
  const scrollToSlide = useCallback((index: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index + 1] as HTMLElement | undefined;
    if (!slide) return;
    const trackRect = track.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    const offset = slideRect.left - trackRect.left + track.scrollLeft - (trackRect.width - slideRect.width) / 2;
    track.scrollTo({ left: offset, behavior: smooth ? "smooth" : "instant" });
  }, []);

  // Navigate
  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    setCurrent(clamped);
    scrollToSlide(clamped);
  }, [items.length, scrollToSlide]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Detect current slide on scroll end
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const trackRect = track.getBoundingClientRect();
        const center = trackRect.left + trackRect.width / 2;
        let closestIdx = 0;
        let closestDist = Infinity;
        // Skip first and last spacers
        const slides = Array.from(track.children).slice(1, -1);
        slides.forEach((child, i) => {
          const rect = child.getBoundingClientRect();
          const childCenter = rect.left + rect.width / 2;
          const dist = Math.abs(center - childCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = i;
          }
        });
        setCurrent(closestIdx);
      }, 100);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => { track.removeEventListener("scroll", onScroll); clearTimeout(timeout); };
  }, []);

  // Init position
  useEffect(() => {
    scrollToSlide(0, false);
  }, [scrollToSlide]);

  // Mouse drag support
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    const dx = e.clientX - dragStartX.current;
    trackRef.current.scrollLeft = scrollStartX.current - dx;
  };
  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Snap to nearest
    const track = trackRef.current;
    if (!track) return;
    const trackRect = track.getBoundingClientRect();
    const center = trackRect.left + trackRect.width / 2;
    let closestIdx = 0;
    let closestDist = Infinity;
    const slides = Array.from(track.children).slice(1, -1);
    slides.forEach((child, i) => {
      const rect = child.getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;
      const dist = Math.abs(center - childCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = i;
      }
    });
    goTo(closestIdx);
  };

  return (
    <>
      {/* Slider container */}
      <div className="relative">
        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {/* Spacer left */}
          <div className="shrink-0 w-[calc((100vw-min(1280px,100vw-4rem))/2+1rem)]" />

          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => { if (!isDragging) setOpen(i); }}
              className="shrink-0 snap-center rounded-2xl overflow-hidden cursor-pointer group"
              style={{ width: "min(70vw, 900px)" }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={`${alt} ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 85vw, 900px"
                />
              </div>
            </button>
          ))}

          {/* Spacer right */}
          <div className="shrink-0 w-[calc((100vw-min(1280px,100vw-4rem))/2+1rem)]" />
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={next}
          disabled={current === items.length - 1}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-brand"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
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
            width={1200}
            height={800}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
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
