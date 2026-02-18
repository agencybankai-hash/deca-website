# Interactive USA Delivery Map — Implementation Plan

## Overview
Replace the `ImagePlaceholder` on `/locations` with a custom SVG map of the Northeast US showing DECA's delivery coverage. Hovering over a state/city shows an animated dashed route line from HQ (Westfield, MA) to the target.

## Approach: Pure SVG + React + anime.js
No external map library needed. We'll hand-craft an SVG of the relevant Northeast states with city markers positioned at approximate coordinates.

## Component: `DeliveryMap.tsx`
A `"use client"` component with:

### SVG Map Layer
- Simplified SVG paths for ~10 Northeast states (MA, CT, RI, NH, NY, VT, ME, NJ, PA, MD)
- States we deliver to are filled with brand color tints, others are neutral gray
- Each state is a `<path>` element with hover interaction

### City Markers
- Small circles/pins at city coordinates (Boston, Springfield, NYC, Hartford, etc.)
- HQ marker (Westfield, MA) distinguished with a pulsing dot + "HQ" label
- Hover tooltip showing city name + delivery estimate

### Animated Dashed Route Line
- On hover over any city/state, an SVG `<path>` appears from Westfield HQ to the target
- The path is drawn with `stroke-dasharray` + `stroke-dashoffset` animation via anime.js
- Curved Bézier path for natural-looking route
- Route disappears (reverse animation) on mouse leave

### Sidebar Integration
- Keep existing state/city list on the right
- Hovering a city in the list also triggers the map route
- Active state highlighted on both map and list simultaneously

## Data Structure
```ts
interface City {
  name: string;
  state: string;
  x: number; y: number;  // SVG coordinates
  deliveryDays: string;   // e.g. "2-3 days"
}
```

## Files to Create/Modify
1. **CREATE** `src/components/DeliveryMap.tsx` — the interactive map component
2. **MODIFY** `src/app/locations/page.tsx` — replace ImagePlaceholder with DeliveryMap

## States on the Map
Highlighted (delivery zone): MA, CT, RI, NH, NY, VT, ME, NJ, PA
Neutral (visible but not served): MD, DE, DC area for context

## Cities with Markers
- **Massachusetts**: Westfield (HQ), Boston, Springfield, Worcester, Cambridge
- **Connecticut**: Hartford, New Haven, Stamford
- **Rhode Island**: Providence, Newport
- **New Hampshire**: Manchester, Nashua
- **New York**: NYC, Albany, Long Island (Hempstead)

## Animation Details
- Route line: dashed (`stroke-dasharray: 8 4`), brand color, 600ms draw animation
- State hover: subtle fill color change (brand/10 → brand/20)
- City hover: scale up marker + show tooltip
- HQ: perpetual subtle pulse animation via CSS
