import React, { useState } from 'react';

/**
 * USStateMap Component
 *
 * A React component that renders a US states map using SVG.
 * For production use, consider these data sources:
 *
 * 1. Natural Earth Data (public domain)
 *    https://www.naturalearthdata.com/
 *
 * 2. TopoJSON US States (widely used in D3 projects)
 *    https://github.com/topojson/us-atlas
 *
 * 3. SimpleMaps (free for non-commercial use)
 *    https://simplemaps.com/resources/svg-us
 *
 * 4. MapSVG (free, CC licensed)
 *    https://mapsvg.com/maps/usa
 *
 * To get the actual SVG paths:
 * 1. Download the SVG file from one of the above sources
 * 2. Open it in a text editor
 * 3. Extract each state's <path> element with its id and d attributes
 * 4. Create a JSON mapping of state codes to path data
 * 5. Import and use that JSON in this component
 */

const USStateMap = ({
  onStateClick = null,
  highlightedStates = [],
  stateColors = {},
  width = 960,
  height = 600
}) => {
  const [hoveredState, setHoveredState] = useState(null);

  // State abbreviation to name mapping
  const stateNames = {
    AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas',
    CA: 'California', CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware',
    FL: 'Florida', GA: 'Georgia', HI: 'Hawaii', ID: 'Idaho',
    IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas',
    KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
    MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi',
    MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada',
    NH: 'New Hampshire', NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York',
    NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma',
    OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
    SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah',
    VT: 'Vermont', VA: 'Virginia', WA: 'Washington', WV: 'West Virginia',
    WI: 'Wisconsin', WY: 'Wyoming'
  };

  /**
   * Import your actual SVG paths here:
   *
   * import statesPaths from './us-states-svg-paths.json';
   *
   * Then replace the statesPaths reference below with the imported data
   */

  const statesPaths = {
    // Example structure - replace with actual SVG path data
    AL: { d: "M792,400..." },
    AK: { d: "M40,500..." },
    // ... add all 50 states
  };

  const getStateColor = (stateCode) => {
    if (stateColors[stateCode]) {
      return stateColors[stateCode];
    }
    if (highlightedStates.includes(stateCode)) {
      return '#4CAF50';
    }
    if (hoveredState === stateCode) {
      return '#2196F3';
    }
    return '#e0e0e0';
  };

  const handleStateClick = (stateCode) => {
    if (onStateClick) {
      onStateClick(stateCode, stateNames[stateCode]);
    }
  };

  return (
    <div className="us-state-map-container">
      <svg
        viewBox="0 0 975 610"
        width={width}
        height={height}
        className="us-state-map"
        style={{ border: '1px solid #ccc' }}
      >
        {Object.entries(statesPaths).map(([stateCode, pathData]) => (
          <path
            key={stateCode}
            id={stateCode}
            d={pathData.d}
            fill={getStateColor(stateCode)}
            stroke="#ffffff"
            strokeWidth="1"
            className="state-path"
            style={{
              cursor: 'pointer',
              transition: 'fill 0.2s ease'
            }}
            onClick={() => handleStateClick(stateCode)}
            onMouseEnter={() => setHoveredState(stateCode)}
            onMouseLeave={() => setHoveredState(null)}
            title={stateNames[stateCode]}
          />
        ))}
      </svg>

      {hoveredState && (
        <div className="state-tooltip">
          {stateNames[hoveredState]} ({hoveredState})
        </div>
      )}
    </div>
  );
};

export default USStateMap;

/**
 * USAGE EXAMPLE:
 *
 * import USStateMap from './USStateMap';
 *
 * function App() {
 *   const [selectedStates, setSelectedStates] = useState([]);
 *
 *   return (
 *     <USStateMap
 *       onStateClick={(code, name) => {
 *         console.log(`Clicked: ${name} (${code})`);
 *         setSelectedStates(prev => [...prev, code]);
 *       }}
 *       highlightedStates={selectedStates}
 *       stateColors={{
 *         TX: '#FF6B6B',
 *         CA: '#4ECDC4'
 *       }}
 *     />
 *   );
 * }
 *
 * NEXT STEPS:
 * 1. Get real SVG data from one of the sources mentioned in the comments
 * 2. Extract the path data and create us-states-svg-paths.json
 * 3. Import the JSON file in this component
 * 4. Add CSS styling for .state-path and .state-tooltip as needed
 */
