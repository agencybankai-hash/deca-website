# US States SVG Map Data - Implementation Guide

## Problem
The external SVG map sources are blocking automated requests. However, you can easily obtain this data manually and integrate it into your React component.

## Best Sources for SVG Map Data

### 1. **Natural Earth Data** (Recommended - Public Domain)
- **URL**: https://www.naturalearthdata.com/
- **License**: Public Domain
- **Quality**: High precision geographic data
- **Steps**:
  1. Visit the site and search for "United States Administrative Boundaries"
  2. Download the shapefile or GeoJSON format
  3. Use an online converter (like https://mapshaper.org/) to convert to SVG
  4. Extract state paths from the SVG

### 2. **TopoJSON US Atlas** (For Developers)
- **URL**: https://github.com/topojson/us-atlas
- **License**: Public Domain
- **Quality**: Clean, optimized for web
- **Steps**:
  1. Clone the repository: `git clone https://github.com/topojson/us-atlas.git`
  2. Files are in `/topology/` directory as TopoJSON
  3. Use `topojson-client` to convert to GeoJSON, then to SVG

### 3. **SimpleMaps SVG** (Free for non-commercial)
- **URL**: https://simplemaps.com/resources/svg-us
- **License**: Free for non-commercial, paid for commercial
- **Quality**: Clean, web-optimized SVG
- **Steps**:
  1. Visit the page and click "Download SVG"
  2. Unzip the file
  3. Extract path data from the SVG using the script below

### 4. **amCharts SVG Maps** (Free, Creative Commons)
- **URL**: https://www.amcharts.com/svg-maps/
- **License**: CC BY-NC-SA 4.0 (free for non-commercial)
- **Quality**: Very high quality, includes multiple zoom levels
- **Steps**:
  1. Download the US map SVG file
  2. Extract state paths using the script below

## How to Extract SVG Path Data

Once you have the SVG file, use this script to extract state paths:

```python
import xml.etree.ElementTree as ET
import json
import re

def extract_svg_states(svg_file_path):
    """
    Extract state path data from an SVG file.
    """
    tree = ET.parse(svg_file_path)
    root = tree.getroot()

    # Handle SVG namespace
    ns = {'svg': 'http://www.w3.org/2000/svg'}

    # Get viewBox
    viewBox = root.get('viewBox', '0 0 960 600')

    states_data = {}

    # Find all path elements
    for path_elem in root.findall('.//svg:path', ns):
        # Get the id (state code)
        path_id = path_elem.get('id', '')

        # Extract state code (usually 2-letter code)
        state_code = re.sub(r'[^A-Z]', '', path_id.upper())

        if len(state_code) == 2:
            # Get the d attribute (path data)
            path_data = path_elem.get('d', '')

            if path_data:
                states_data[state_code] = {
                    'd': path_data,
                    'original_id': path_id
                }

    return {
        'viewBox': viewBox,
        'statesPaths': states_data
    }

# Usage:
# result = extract_svg_states('us-states.svg')
# with open('us-states-svg-paths.json', 'w') as f:
#     json.dump(result, f, indent=2)
```

## Alternative: JavaScript Extraction

If you prefer to extract paths using JavaScript:

```javascript
function extractSVGPaths(svgElement) {
  const paths = svgElement.querySelectorAll('path');
  const statesData = {};

  paths.forEach(path => {
    const id = path.getAttribute('id') || '';
    const stateCode = id.toUpperCase().match(/[A-Z]{2}/);

    if (stateCode) {
      statesData[stateCode[0]] = {
        d: path.getAttribute('d'),
        original_id: id
      };
    }
  });

  const viewBox = svgElement.getAttribute('viewBox');

  return {
    viewBox,
    statesPaths: statesData
  };
}

// In the browser console:
// const svg = document.querySelector('svg');
// const data = extractSVGPaths(svg);
// console.log(JSON.stringify(data, null, 2));
// Copy the output to us-states-svg-paths.json
```

## Format of the JSON Output

Your final `us-states-svg-paths.json` should look like:

```json
{
  "viewBox": "0 0 960 610",
  "statesPaths": {
    "AL": {
      "d": "M792.1,400.2 L799.3,402.1 L806.2,400.5 L809.1,395.2 L807.4,388.9 L803.2,385.1 L801.5,392.3 L797.8,396.1 Z"
    },
    "AK": {
      "d": "M40.1,500.2 L80.3,480.1 L90.2,520.5 L50.1,540.2 Z"
    },
    "AZ": {
      "d": "M200.1,300.2 L280.3,280.1 L290.2,340.5 L210.1,350.2 Z"
    },
    ...
  }
}
```

## Integration with React Component

Once you have the JSON file:

```javascript
// USStateMap.jsx
import statesPaths from './us-states-svg-paths.json';

const USStateMap = ({ onStateClick, highlightedStates, stateColors }) => {
  // ... component code ...

  return (
    <svg viewBox={statesPaths.viewBox} width={960} height={600}>
      {Object.entries(statesPaths.statesPaths).map(([stateCode, pathData]) => (
        <path
          key={stateCode}
          id={stateCode}
          d={pathData.d}
          fill={getStateColor(stateCode)}
          stroke="#ffffff"
          strokeWidth="1"
          onClick={() => onStateClick?.(stateCode)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </svg>
  );
};
```

## Quick Download Method

If you want the data quickly without extracting it yourself, you can:

1. **Use a CDN with CORS enabled**:
   - Create a GitHub repository with the SVG file
   - Use jsDelivr or unpkg to access it with CORS support

2. **Use an API**:
   - OpenStreetMap Nominatim can provide boundary data
   - Google Maps API (with proper setup)

3. **Copy from existing React libraries**:
   - `react-map-gl` - has SVG state maps
   - `d3-geo` - has geographic data utilities
   - Check their source on GitHub for the path data

## Licensing Considerations

- **Public Domain**: Natural Earth Data, older Wikimedia files
- **Creative Commons**: amCharts (CC BY-NC-SA 4.0)
- **Commercial License**: SimpleMaps offers both free and paid options
- **Open Source**: Natural Earth, TopoJSON files

Check each source's license before using in your project!

## Testing Your Data

Once you have the JSON file, test it with:

```javascript
import statesPaths from './us-states-svg-paths.json';

console.log('ViewBox:', statesPaths.viewBox);
console.log('States found:', Object.keys(statesPaths.statesPaths).length);
console.log('Sample path (AL):', statesPaths.statesPaths.AL.d.substring(0, 100) + '...');
```

All 50 states should be present in the final JSON file.
