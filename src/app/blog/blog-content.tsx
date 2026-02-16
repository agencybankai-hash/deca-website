"use client";
import { useState } from "react";

const filters = ["All", "Buying Guides", "Comparisons", "Energy Efficiency", "Costs & ROI", "Technical"];

const articles = [
  { title: "European vs American Windows: Complete Comparison", tag: "Comparison", author: "Technical Director", readTime: "8 min" },
  { title: "How to Choose Replacement Windows: 2026 Buying Guide", tag: "Buying Guides", author: "Installation Lead", readTime: "12 min" },
  { title: "How Much Do New Windows Cost? Price Guide", tag: "Costs & ROI", author: "Vladimir, CEO", readTime: "10 min" },
  { title: "Triple vs Double Pane: Which Should You Choose?", tag: "Comparison", author: "Technical Director", readTime: "7 min" },
  { title: "Are Energy Efficient Windows Worth the Investment?", tag: "Energy Efficiency", author: "Technical Director", readTime: "9 min" },
  { title: "Tilt & Turn vs Double Hung: Which Is Better?", tag: "Comparison", author: "Technical Director", readTime: "6 min" },
];

export default function BlogContent() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? articles : articles.filter((a) => a.tag === activeFilter);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex gap-2 mb-10 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeFilter === f ? "bg-blue-accent text-white" : "bg-warm-gray text-text-secondary hover:bg-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Articles grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <div key={article.title} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
            <div className="bg-warm-gray h-44 flex items-center justify-center text-text-muted text-sm group-hover:bg-blue-light transition-colors">
              [Article Image]
            </div>
            <div className="p-5">
              <span className="inline-block text-xs font-semibold text-blue-accent bg-blue-light px-2.5 py-1 rounded mb-2">{article.tag}</span>
              <h3 className="font-semibold text-text-primary text-sm leading-tight mb-3 group-hover:text-blue-accent transition-colors">{article.title}</h3>
              <div className="flex items-center justify-between text-xs text-text-muted">
                <span>By {article.author}</span>
                <span>{article.readTime} read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
