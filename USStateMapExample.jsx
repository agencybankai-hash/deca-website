import React, { useState } from 'react';
import statesPaths from './us-states-svg-paths.json';

/**
 * Complete USStateMap Component Example
 *
 * This is a fully functional example of how to use the extracted SVG state paths.
 * Features:
 * - Click to select/deselect states
 * - Hover effects
 * - Custom colors for individual states
 * - Responsive sizing
 * - Tooltip showing state name on hover
 */

const USStateMapExample = () => {
  const [selectedStates, setSelectedStates] = useState([]);
  const [hoveredState, setHoveredState] = useState(null);

  // State abbreviation to full name mapping
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

  const toggleState = (stateCode) => {
    setSelectedStates(prev =>
      prev.includes(stateCode)
        ? prev.filter(code => code !== stateCode)
        : [...prev, stateCode]
    );
  };

  const getStateColor = (stateCode) => {
    if (hoveredState === stateCode) {
      return '#1976d2'; // Blue on hover
    }
    if (selectedStates.includes(stateCode)) {
      return '#4caf50'; // Green when selected
    }
    return '#e8eaf6'; // Light gray default
  };

  const handleClearSelection = () => {
    setSelectedStates([]);
  };

  const handleSelectAll = () => {
    setSelectedStates(Object.keys(stateNames));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1>Interactive US States Map</h1>
        <p>Click on states to select them</p>

        <div style={{ marginBottom: '10px' }}>
          <button
            onClick={handleSelectAll}
            style={{
              padding: '8px 16px',
              marginRight: '10px',
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Select All
          </button>
          <button
            onClick={handleClearSelection}
            style={{
              padding: '8px 16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Clear All
          </button>
        </div>

        {selectedStates.length > 0 && (
          <div style={{ marginBottom: '10px' }}>
            <strong>Selected States ({selectedStates.length}):</strong>
            <div style={{ marginTop: '5px' }}>
              {selectedStates
                .sort()
                .map(code => (
                  <span
                    key={code}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#4caf50',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      marginRight: '5px',
                      marginBottom: '5px',
                      fontSize: '12px'
                    }}
                  >
                    {code} - {stateNames[code]}
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '4px',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5'
        }}
      >
        <svg
          viewBox={statesPaths.viewBox}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%'
          }}
        >
          {Object.entries(statesPaths.statesPaths).map(([stateCode, pathData]) => (
            <path
              key={stateCode}
              id={stateCode}
              d={pathData.d}
              fill={getStateColor(stateCode)}
              stroke="#ffffff"
              strokeWidth="2"
              style={{
                cursor: 'pointer',
                transition: 'fill 0.2s ease',
                filter: hoveredState === stateCode ? 'drop-shadow(0 0 3px rgba(0,0,0,0.3))' : 'none'
              }}
              onClick={() => toggleState(stateCode)}
              onMouseEnter={() => setHoveredState(stateCode)}
              onMouseLeave={() => setHoveredState(null)}
            />
          ))}
        </svg>
      </div>

      {hoveredState && (
        <div
          style={{
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px'
          }}
        >
          <strong>Hovering over:</strong> {stateNames[hoveredState]} ({hoveredState})
        </div>
      )}

      {/* Debug info */}
      <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
        <p>ViewBox: {statesPaths.viewBox}</p>
        <p>Total states loaded: {Object.keys(statesPaths.statesPaths).length}</p>
      </div>
    </div>
  );
};

export default USStateMapExample;

/**
 * STYLING SUGGESTIONS (CSS Module or styled-components):
 *
 * .us-state-map {
 *   width: 100%;
 *   height: auto;
 *   max-width: 100%;
 *   border: 1px solid #ddd;
 *   border-radius: 4px;
 *   background-color: #f5f5f5;
 * }
 *
 * .state-path {
 *   cursor: pointer;
 *   stroke: white;
 *   stroke-width: 2;
 *   transition: fill 0.2s ease, filter 0.2s ease;
 * }
 *
 * .state-path:hover {
 *   filter: drop-shadow(0 0 3px rgba(0,0,0,0.3));
 * }
 *
 * .state-path.selected {
 *   fill: #4caf50;
 * }
 *
 * .state-tooltip {
 *   padding: 8px 12px;
 *   background-color: #333;
 *   color: white;
 *   border-radius: 4px;
 *   font-size: 12px;
 *   margin-top: 10px;
 * }
 */
