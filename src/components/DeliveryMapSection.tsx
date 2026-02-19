"use client";
import DeliveryMap from "@/components/DeliveryMap";

export default function DeliveryMapSection() {
  return (
    <section className="py-16 md:py-20 bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-white/60 mb-3">Nationwide Delivery</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Factory-Direct Shipping Across the U.S.
          </h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Every DECA window is manufactured in Westfield, Massachusetts and shipped
            directly to your project site. Northeast states enjoy same-day to 5-day
            delivery, while we reach the entire continental U.S. within 10 days.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                value: "1–2",
                label: "days to CT, RI",
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>,
              },
              {
                value: "3–5",
                label: "days to PA, NJ",
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h3.86c.26 0 .515-.086.72-.24l3.3-2.48a1.125 1.125 0 0 1 1.38.06l2.24 2a1.126 1.126 0 0 0 .75.29H21" /></svg>,
              },
              {
                value: "8–10",
                label: "days coast-to-coast",
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m-3.414 1.082A9 9 0 0 1 3.75 12c0-1.18.227-2.306.641-3.34" /></svg>,
              },
            ].map((item) => (
              <div key={item.value} className="bg-white/10 rounded-xl border border-white/15 p-4 flex flex-col items-center text-center">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white mb-2">
                  {item.icon}
                </div>
                <p className="text-xl font-extrabold text-white leading-tight">{item.value}</p>
                <p className="text-[11px] text-white/50 mt-0.5 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <DeliveryMap />
      </div>
      </div>
    </section>
  );
}
