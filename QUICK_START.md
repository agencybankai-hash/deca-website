# US State SVG Map - Quick Start (5 Minutes)

## TL;DR

Need a US state map in React? Here's the fastest way:

### 1️⃣ Download SVG (1 minute)
Go to: https://simplemaps.com/resources/svg-us
Click "Download SVG"

### 2️⃣ Extract Paths (30 seconds)
```bash
# Make sure Node.js is installed
node extract-svg-paths.js us-states.svg us-states-svg-paths.json
```

### 3️⃣ Use in React (2 minutes)
```jsx
import USStateMapExample from './USStateMapExample';

export default function App() {
  return <USStateMapExample />;
}
```

Done! You have an interactive US state map.

---

## What You Get

- ✅ All 50 states clickable
- ✅ Hover effects
- ✅ Selection tracking
- ✅ Custom colors
- ✅ Responsive sizing
- ✅ ~5KB gzipped

---

## File Checklist

After following the 3 steps above, you should have:

- [ ] `us-states-svg-paths.json` - Generated from SVG file
- [ ] `USStateMap.jsx` - Reusable component
- [ ] `USStateMapExample.jsx` - Complete working example
- [ ] `extract-svg-paths.js` - Extraction tool

---

## Common Customizations

### Change Colors
```jsx
<USStateMap
  stateColors={{
    'CA': '#FF6B6B',
    'TX': '#4ECDC4'
  }}
/>
```

### Track Selections
```jsx
const [selected, setSelected] = useState([]);

<USStateMap
  highlightedStates={selected}
  onStateClick={(code) => {
    setSelected(prev =>
      prev.includes(code)
        ? prev.filter(s => s !== code)
        : [...prev, code]
    );
  }}
/>
```

### Responsive Width
```jsx
<div style={{ width: '100%', maxWidth: '1200px' }}>
  <USStateMapExample />
</div>
```

---

## Troubleshooting

**"Module not found: us-states-svg-paths.json"**
→ Make sure you ran the extraction script and file is in the right directory

**"SVG won't render"**
→ Check the JSON file is valid (paste in https://jsonlint.com/)

**"States don't look right"**
→ Different SVG sources have different projections - this is normal

**"How do I add labels to states?"**
→ See `USStateMapExample.jsx` for advanced usage

---

## Full Documentation

See these files for more:
- **US_STATE_MAP_README.md** - Complete guide
- **SVG_MAP_DATA_GUIDE.md** - SVG sources & extraction details
- **IMPLEMENTATION_SUMMARY.md** - Full overview

---

## Alternative SVG Sources

If SimpleMaps doesn't work, try:

1. **Natural Earth** (best quality)
   https://www.naturalearthdata.com/
   - Download GeoJSON → Convert with https://mapshaper.org/

2. **amCharts** (high quality, but non-commercial)
   https://www.amcharts.com/svg-maps/

3. **GitHub TopoJSON** (clean data)
   https://github.com/topojson/us-atlas
   - Need to convert TopoJSON to SVG

---

## That's It!

You now have a production-ready US state map. For advanced features, customization, or troubleshooting, refer to the full documentation.

Happy mapping! 🗺️

---

## Still Stuck?

1. Check `extract-svg-paths.js` has correct file path
2. Verify JSON file syntax with online JSON validator
3. Check browser console for import errors
4. Review `USStateMapExample.jsx` for working example
5. Read `SVG_MAP_DATA_GUIDE.md` for detailed extraction help

All guides are self-contained with code examples and explanations.
