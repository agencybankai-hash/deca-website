# US State SVG Map - Complete Implementation Guide

## Overview

This package contains everything you need to build an interactive US states map in React using real SVG geographic data. Due to access restrictions on direct URL fetching, the guide focuses on manual extraction methods that give you control and transparency over the data.

## Files Included

1. **USStateMap.jsx** - Base component with state mapping functionality
2. **USStateMapExample.jsx** - Complete working example with selection features
3. **extract-svg-paths.js** - Node.js utility to extract SVG path data
4. **us-states-svg-paths.json** - Placeholder JSON (you'll replace this with real data)
5. **SVG_MAP_DATA_GUIDE.md** - Detailed extraction methods and sources
6. **This README** - Quick start guide

## Quick Start (5 Minutes)

### Step 1: Get an SVG Map File

Download one of these sources:

**Option A: SimpleMaps (Recommended for beginners)**
- Visit: https://simplemaps.com/resources/svg-us
- Click "Download SVG"
- Extract the zip file
- You'll get `us-states.svg`

**Option B: Natural Earth Data (Recommended for quality)**
- Visit: https://www.naturalearthdata.com/
- Search for "United States"
- Download GeoJSON → Convert to SVG using https://mapshaper.org/

**Option C: GitHub (Already prepared)**
- Visit: https://github.com/topojson/us-atlas
- Clone or download the repository
- Use the TopoJSON files and convert to SVG

### Step 2: Extract Path Data

**Method A: Using Node.js Script (Easiest)**

```bash
node extract-svg-paths.js us-states.svg us-states-svg-paths.json
```

**Method B: Using Browser Console (No Dependencies)**

1. Download and open the SVG file in your browser
2. Press F12 to open DevTools
3. Go to the Console tab
4. Copy and paste the `browserExtractPaths()` function from `extract-svg-paths.js`
5. Type: `browserExtractPaths()`
6. Copy the JSON output

**Method C: Manual Python Script**

```python
import xml.etree.ElementTree as ET
import json
import re

svg_file = 'us-states.svg'
tree = ET.parse(svg_file)
root = tree.getroot()

ns = {'svg': 'http://www.w3.org/2000/svg'}
viewBox = root.get('viewBox', '0 0 960 610')
states_data = {}

for path_elem in root.findall('.//svg:path', ns):
    path_id = path_elem.get('id', '')
    state_code = re.sub(r'[^A-Z]', '', path_id.upper())

    if len(state_code) == 2:
        path_data = path_elem.get('d', '')
        if path_data:
            states_data[state_code] = {'d': path_data}

output = {
    'viewBox': viewBox,
    'statesPaths': states_data
}

with open('us-states-svg-paths.json', 'w') as f:
    json.dump(output, f, indent=2)

print(f"Extracted {len(states_data)} states")
```

### Step 3: Place the JSON File

Copy the generated `us-states-svg-paths.json` to your project directory (same folder as your React components).

### Step 4: Use in Your React Component

```jsx
import USStateMapExample from './USStateMapExample';

function App() {
  return <USStateMapExample />;
}

export default App;
```

## Component Features

### Basic Props

```jsx
<USStateMap
  // Callback when a state is clicked
  onStateClick={(stateCode, stateName) => {
    console.log(`Clicked: ${stateName}`);
  }}

  // Array of state codes to highlight
  highlightedStates={['CA', 'TX', 'NY']}

  // Custom colors for specific states
  stateColors={{
    'CA': '#FF6B6B',
    'TX': '#4ECDC4',
    'NY': '#45B7D1'
  }}

  // SVG dimensions (responsive by default)
  width={960}
  height={600}
/>
```

### Advanced Usage

```jsx
const [selectedStates, setSelectedStates] = useState([]);
const [stateData, setStateData] = useState({});

const handleStateClick = (code, name) => {
  setSelectedStates(prev =>
    prev.includes(code)
      ? prev.filter(s => s !== code)
      : [...prev, code]
  );
};

return (
  <USStateMap
    onStateClick={handleStateClick}
    highlightedStates={selectedStates}
    stateColors={stateData}
  />
);
```

## Customization

### Change Colors

Edit the `getStateColor` function in the component:

```jsx
const getStateColor = (stateCode) => {
  if (stateColors[stateCode]) return stateColors[stateCode];
  if (highlightedStates.includes(stateCode)) return '#4CAF50'; // Change this
  if (hoveredState === stateCode) return '#2196F3'; // Or this
  return '#e0e0e0'; // Or this
};
```

### Add State Labels

```jsx
<text
  x={centroidX}
  y={centroidY}
  textAnchor="middle"
  fontSize="12"
  pointerEvents="none"
>
  {stateCode}
</text>
```

(You'll need to calculate or define centroid coordinates for each state)

### Responsive Sizing

The component uses SVG's responsive behavior. Wrap it in a responsive container:

```jsx
<div style={{ width: '100%', maxWidth: '1200px' }}>
  <USStateMapExample />
</div>
```

## Data Format Reference

Your `us-states-svg-paths.json` should have this structure:

```json
{
  "viewBox": "0 0 960 610",
  "statesPaths": {
    "AL": {
      "d": "M792.1,400.2 L799.3,402.1 L806.2,400.5..."
    },
    "AK": {
      "d": "M40.1,500.2 L80.3,480.1 L90.2,520.5..."
    },
    "AZ": {
      "d": "M200.1,300.2 L280.3,280.1 L290.2,340.5..."
    },
    ...
  }
}
```

All 50 states should be included:
AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY

## Troubleshooting

### Missing States
- Ensure your SVG file has id attributes for each state
- Check that the id format matches standard state abbreviations (e.g., "AL", "alaska", "state-al")
- Use the alternative extraction method in the script

### Wrong Map Coordinates
- Different SVG sources use different coordinate systems
- The viewBox attribute affects how coordinates are scaled
- Make sure you're using the viewBox value from your source

### Component Not Rendering
- Check that `us-states-svg-paths.json` is in the correct location
- Verify the JSON file is valid (use https://jsonlint.com/)
- Check browser console for import/parsing errors

### Performance Issues
- If you have many interactive elements, consider memoizing the component:
  ```jsx
  export default React.memo(USStateMap);
  ```
- Use CSS for animations instead of React state updates

## License Considerations

When using this code with different SVG sources:

| Source | License | Commercial Use |
|--------|---------|-----------------|
| Natural Earth Data | Public Domain | ✅ Yes |
| TopoJSON | Public Domain | ✅ Yes |
| SimpleMaps | Free tier: Non-commercial | ⚠️ Check |
| amCharts | CC BY-NC-SA | ❌ No (free tier) |
| Wikimedia Commons | Various (usually CC or PD) | ✅ Yes |

## Advanced: Adding Interactivity Data

```jsx
const [interactiveData, setInteractiveData] = useState({
  'CA': { population: 39538223, gdp: 3157000 },
  'TX': { population: 29145505, gdp: 2353000 },
  // ...
});

const handleStateClick = (code) => {
  console.log(`${code}:`, interactiveData[code]);
};
```

## API Reference

### USStateMap Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onStateClick` | function | null | Callback when state is clicked |
| `highlightedStates` | array | [] | Array of state codes to highlight |
| `stateColors` | object | {} | Map of state codes to color values |
| `width` | number | 960 | SVG width in pixels |
| `height` | number | 600 | SVG height in pixels |

### Extract Function Signature

```javascript
extractSVGPaths(svgFilePath, outputFilePath)
// Returns: { viewBox, statesPaths, metadata }
```

## Examples

### Example 1: Simple Selection Map

See `USStateMapExample.jsx` for a complete implementation.

### Example 2: Data Visualization

```jsx
const stateColors = {};
statePopulation.forEach(({ state, population }) => {
  const color = population > 10000000 ? '#FF6B6B' : '#4ECDC4';
  stateColors[state] = color;
});

<USStateMap stateColors={stateColors} />
```

### Example 3: Form Integration

```jsx
const [selectedStates, setSelectedStates] = useState([]);

<form onSubmit={handleSubmit}>
  <USStateMap
    highlightedStates={selectedStates}
    onStateClick={(code) => {
      setSelectedStates(prev =>
        prev.includes(code)
          ? prev.filter(s => s !== code)
          : [...prev, code]
      );
    }}
  />
  <button type="submit">
    Submit Selected States: {selectedStates.join(', ')}
  </button>
</form>
```

## Performance Tips

1. **Memoization**: Wrap the component with `React.memo()`
2. **Lazy Loading**: Import the JSON file dynamically if it's large
3. **Event Delegation**: Use single event handler for all paths
4. **CSS Transitions**: Prefer CSS for animations over React state
5. **Virtualization**: If you have overlays or labels, virtualize them

## Next Steps

1. ✅ Download SVG from one of the recommended sources
2. ✅ Extract path data using the provided script
3. ✅ Place `us-states-svg-paths.json` in your project
4. ✅ Import and use `USStateMapExample.jsx`
5. ✅ Customize colors and behavior for your needs

## Support & Resources

- **SVG Sources**: See `SVG_MAP_DATA_GUIDE.md`
- **Extraction Tool**: See `extract-svg-paths.js`
- **Working Example**: See `USStateMapExample.jsx`
- **Base Component**: See `USStateMap.jsx`

## Common Questions

**Q: Can I use this commercially?**
A: Yes, as long as you use a public domain SVG source (Natural Earth, TopoJSON) or pay for a commercial license (SimpleMaps).

**Q: How do I add state labels?**
A: You'll need to define centroid points for each state. Many SVG sources provide these.

**Q: Can I make the map responsive?**
A: Yes! SVG scales automatically. Wrap in a responsive container div.

**Q: How large are the SVG files?**
A: Typical US state map SVGs are 50-200KB. Compressed, they're 5-20KB.

## License

This implementation guide is provided as-is. Follow the license of your chosen SVG data source.
