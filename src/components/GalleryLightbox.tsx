"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  tall?: boolean;
}

export default function GalleryLightbox({ items, alt }: { items: GalleryItem[]; alt: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className={`rounded-xl overflow-hidden cursor-pointer ${item.tall ? "md:row-span-2" : ""}`}
          >
            <Image
              src={item.src}
              alt={`${alt} ${i + 1}`}
              width={500}
              height={item.tall ? 600 : 300}
              className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${item.tall ? "h-full" : "h-48 md:h-52"}`}
            />
          </button>
        ))}
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

          {/* Prev/Next arrows */}
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

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {open + 1} / {items.length}
          </div>
        </div>
      )}
    </>
  );
}
