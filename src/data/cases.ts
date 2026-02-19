export interface CaseStudy {
  slug: string;
  title: string;
  location: string;
  type: string;
  products: string;
  summary: string;
  story: string;
  results: { label: string; value: string }[];
  quote: string;
  quoteName: string;
  quoteRole: string;
  photoDesc: string;
  photoDescFull: string;
}

export const cases: CaseStudy[] = [
  {
    slug: "thompson-colonial-renovation",
    title: "From Drafty Colonial to Energy Showpiece",
    location: "Northampton, MA",
    type: "Full Home Renovation",
    products: "22 Tilt & Turn Windows, 2 French Doors",
    summary: "A 1920s Colonial losing $400/month in heating bills. After DECA windows — energy costs dropped 45%, noise from Route 9 disappeared.",
    story: `The Thompson family had been living with single-pane windows in their 1920s Colonial for eight years. Every winter, frost formed on the inside of the glass. Their heating bills hit $620/month in January. They'd tried storm windows, weatherstripping, everything short of replacement.

After researching European tilt & turn systems, they contacted DECA. The challenge: 22 non-standard window openings, some with curved trim that needed custom profiles. DECA's engineering team did an on-site survey, created custom CAD drawings for each opening, and matched the historic muntin pattern with internal grilles.

Installation took 6 days. The crew worked room by room so the family could stay in the house. The first thing Sarah Thompson noticed: silence. Their home sits 200 feet from Route 9, and for the first time in eight years, they couldn't hear traffic with the windows closed.

Three months later, their January heating bill was $340 — a 45% reduction. The triple-pane glass with argon fill and low-E coating transformed their thermal envelope. The tilt function gives them ventilation without security concerns, and the turn function makes cleaning the second-floor windows easy from inside.`,
    results: [
      { label: "Energy Savings", value: "45%" },
      { label: "Noise Reduction", value: "48 dB" },
      { label: "Windows Replaced", value: "22" },
      { label: "Install Time", value: "6 days" },
    ],
    quote: "We should have done this five years ago. The house is quiet, warm, and our energy bills are almost half what they were. The tilt feature is something we use every single day.",
    quoteName: "Sarah Thompson",
    quoteRole: "Homeowner, Northampton MA",
    photoDesc: "Фото: Colonial дом Томпсонов после замены окон на DECA Tilt&Turn",
    photoDescFull: "Фото: интерьер дома Томпсонов — новые окна DECA, вид на гостиную с мягким светом",
  },
  {
    slug: "rivera-modern-build",
    title: "Architect's Own Home — Zero Compromise on Performance",
    location: "Cambridge, MA",
    type: "New Construction",
    products: "16 Tilt & Turn Windows, 1 Lift & Slide Door",
    summary: "An architect building his own home chose DECA after testing 7 brands. U-value 0.10, passive house level performance, zero condensation in first winter.",
    story: `Marco Rivera is a residential architect who has specified windows for over 40 projects. When it came to his own home — a modern 2,800 sq ft build in Cambridge — he tested samples from seven manufacturers before choosing DECA.

"I measured the U-values myself with a heat flux sensor," Marco explains. "DECA's triple-pane system tested at 0.10 — better than any other product I evaluated, including two German imports that cost 40% more."

The design called for floor-to-ceiling glass on the south façade: a 14-foot Lift & Slide door system and six fixed panels. DECA's engineering team worked directly with Marco's structural engineer on the wind load calculations and thermal bridging details at the frame-to-wall connections.

The first winter was the real test. Outside temperature hit -8°F in January. Interior glass surface temperature stayed above 62°F. Zero condensation on any window — something Marco had never achieved in any previous project. His monitoring system recorded a whole-house heating demand 35% below code requirements.

The Lift & Slide door has become the centerpiece of the home. A single finger opens the 300-pound panel. Guests always ask about it first.`,
    results: [
      { label: "U-Value Achieved", value: "0.10" },
      { label: "Below Code", value: "35%" },
      { label: "Condensation", value: "Zero" },
      { label: "Brands Tested", value: "7" },
    ],
    quote: "I've specified windows for 40+ projects. For my own home, I needed the best. DECA delivered passive-house performance at a price point that made the German imports hard to justify.",
    quoteName: "Marco Rivera, AIA",
    quoteRole: "Architect & Homeowner, Cambridge MA",
    photoDesc: "Фото: современный дом Риверы с панорамным остеклением DECA",
    photoDescFull: "Фото: интерьер — Lift&Slide дверь DECA в гостиной дома Риверы, вид на сад",
  },
  {
    slug: "elm-street-multifamily",
    title: "62 Units, One Supplier, Zero Punch List Items",
    location: "Springfield, MA",
    type: "Multi-Family Development",
    products: "248 uPVC Windows, 62 Entry Doors",
    summary: "A developer replaced their Chinese import supplier with DECA mid-project. Result: faster delivery, zero defects, and tenants who actually comment on window quality.",
    story: `Elm Street Development was halfway through a 62-unit apartment complex when their overseas window supplier missed the third delivery deadline. Project manager Dave Chen needed 248 windows and 62 entry doors — and he needed them fast.

"We were bleeding $15,000 a week in delays," Dave recalls. "I called DECA on a Monday. They had an engineer on-site Wednesday doing measurements. We had shop drawings approved by Friday."

DECA produced the entire order in their Massachusetts facility in 5 weeks. Delivery was phased: Building A windows arrived first, then Building B two weeks later, matching the construction sequence perfectly. The installation crew noted the consistency — every unit was within spec, hardware worked smoothly, and the weathersealing was flawless.

Six months after occupancy, the property manager reported something unusual: tenants were actually commenting on the windows. "People don't usually notice windows," she said. "But multiple tenants mentioned how quiet the apartments are compared to their previous places." The building's first winter energy audit showed heating costs 28% below the developer's pro forma projections.

Dave has since specified DECA for three more projects.`,
    results: [
      { label: "Units", value: "62" },
      { label: "Windows + Doors", value: "310" },
      { label: "Punch List Items", value: "0" },
      { label: "Energy vs Budget", value: "-28%" },
    ],
    quote: "I switched to DECA mid-project out of desperation. Now I specify them from day one. Local manufacturing means I can drive to the factory if I need to. That matters when you have $15K/week on the line.",
    quoteName: "Dave Chen",
    quoteRole: "Project Manager, Elm Street Development",
    photoDesc: "Фото: многоквартирный комплекс Elm Street с окнами DECA",
    photoDescFull: "Фото: фасад здания Elm Street — ряды uPVC окон DECA, вид с улицы",
  },
  {
    slug: "historic-inn-restoration",
    title: "1847 Inn — Modern Performance Behind Period Aesthetics",
    location: "Stockbridge, MA",
    type: "Historic Restoration",
    products: "34 Custom Profile Windows, 4 Entry Doors",
    summary: "A Berkshires inn needed windows that would pass SHPO review AND cut $18K/year in heating costs. DECA engineered custom profiles matching the 1847 originals.",
    story: `The Red Lion corridor in Stockbridge, MA is a registered historic district. When the owners of Birchwood Inn decided to replace their 34 windows, they faced a seemingly impossible requirement: new windows had to be visually indistinguishable from the 1847 originals while meeting modern energy codes.

DECA's team photographed and measured every existing window, including the unique ogee muntin profiles, the wide sash proportions, and the deep sill details. They engineered custom uPVC profiles that replicated the exterior appearance while hiding triple-pane glass and multi-point locking systems behind period-correct aesthetics.

The Massachusetts Historical Commission reviewed and approved the design. From the street, the windows look identical to the originals. From inside, the difference is dramatic: the constant draft that chilled guests in the front rooms is gone. The inn's heating system — a vintage steam boiler — now cycles less frequently.

The owners tracked their propane usage for the first full winter: $18,200 less than the previous year. The payback period for the entire window project: under 6 years. Guest reviews started mentioning "how cozy" the rooms felt — a word never used in previous reviews.`,
    results: [
      { label: "Annual Savings", value: "$18.2K" },
      { label: "SHPO Approved", value: "Yes" },
      { label: "Payback Period", value: "< 6 yr" },
      { label: "Building Age", value: "1847" },
    ],
    quote: "Our guests don't know the windows are new — that's the highest compliment. But they do notice the rooms are warm and quiet. Our heating bill tells the rest of the story.",
    quoteName: "Ellen & Tom Merrick",
    quoteRole: "Owners, Birchwood Inn, Stockbridge MA",
    photoDesc: "Фото: исторический Birchwood Inn с окнами DECA в стиле 1847 года",
    photoDescFull: "Фото: интерьер комнаты Inn — кажется винтажным, но окна новые DECA",
  },
];
