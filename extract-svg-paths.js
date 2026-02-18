#!/usr/bin/env node

/**
 * SVG Path Extractor for US States
 *
 * This script extracts state path data from an SVG file and creates
 * a JSON file suitable for use with the USStateMap React component.
 *
 * Usage:
 *   node extract-svg-paths.js <input-svg-file> [output-json-file]
 *
 * Example:
 *   node extract-svg-paths.js us-states.svg us-states-svg-paths.json
 *
 * Or for interactive use in a browser console (see browserExtractPaths function below)
 */

const fs = require('fs');
const path = require('path');

/**
 * Main extraction function for Node.js
 */
function extractSVGPaths(svgFilePath, outputFilePath = null) {
  try {
    // Read the SVG file
    const svgContent = fs.readFileSync(svgFilePath, 'utf-8');

    // Parse the SVG
    const viewBoxMatch = svgContent.match(/viewBox\s*=\s*["']([^"']+)["']/i);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 960 610';

    // Extract all path elements and their attributes
    const pathRegex = /<path[^>]*id\s*=\s*["']([^"']+)["'][^>]*d\s*=\s*["']([^"']+)["'][^>]*>/gi;
    const statesPaths = {};

    let match;
    let count = 0;

    while ((match = pathRegex.exec(svgContent)) !== null) {
      const id = match[1];
      const pathData = match[2];

      // Extract state code (look for 2-letter codes like "AL", "AK", etc.)
      const stateCodeMatch = id.toUpperCase().match(/([A-Z]{2})/);

      if (stateCodeMatch) {
        const stateCode = stateCodeMatch[1];
        statesPaths[stateCode] = {
          d: pathData,
          original_id: id
        };
        count++;
        console.log(`✓ Extracted ${stateCode} (${id})`);
      }
    }

    if (count === 0) {
      console.warn('⚠ Warning: No paths with state codes found.');
      console.warn('Trying alternative extraction method...\n');

      // Alternative: extract all paths regardless of ID
      const altPathRegex = /<path[^>]*d\s*=\s*["']([^"']+)["'][^>]*(?:id\s*=\s*["']([^"']+)["'])?[^>]*>/gi;

      while ((match = altPathRegex.exec(svgContent)) !== null) {
        const pathData = match[1];
        const id = match[2] || `path_${count}`;

        statesPaths[`STATE_${count}`] = {
          d: pathData,
          original_id: id
        };
        count++;
      }

      console.log(`Found ${count} total paths (may need manual assignment to state codes)\n`);
    }

    const output = {
      viewBox,
      statesPaths,
      metadata: {
        extractionDate: new Date().toISOString(),
        totalStatesExtracted: Object.keys(statesPaths).length,
        sourceFile: path.basename(svgFilePath)
      }
    };

    // Write to output file if specified
    if (outputFilePath) {
      fs.writeFileSync(outputFilePath, JSON.stringify(output, null, 2));
      console.log(`\n✅ Extracted ${count} state paths`);
      console.log(`📁 Output saved to: ${outputFilePath}`);
      console.log(`📊 ViewBox: ${viewBox}`);
    }

    return output;

  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
}

/**
 * Browser console version - paste into browser console when you have an SVG open
 * This is useful for extracting from SVG files opened directly in the browser
 */
function browserExtractPaths() {
  try {
    const svgElement = document.querySelector('svg');

    if (!svgElement) {
      console.error('No SVG found on page');
      return;
    }

    const viewBox = svgElement.getAttribute('viewBox') || '0 0 960 610';
    const paths = svgElement.querySelectorAll('path');
    const statesPaths = {};

    paths.forEach((pathElem, index) => {
      const id = pathElem.getAttribute('id') || '';
      const d = pathElem.getAttribute('d') || '';

      if (!d) return;

      // Try to extract state code from ID
      const stateCodeMatch = id.toUpperCase().match(/([A-Z]{2})/);

      if (stateCodeMatch) {
        const stateCode = stateCodeMatch[1];
        statesPaths[stateCode] = {
          d,
          original_id: id
        };
        console.log(`✓ Extracted ${stateCode}`);
      }
    });

    const output = {
      viewBox,
      statesPaths,
      metadata: {
        extractionDate: new Date().toISOString(),
        totalStatesExtracted: Object.keys(statesPaths).length,
        extractionMethod: 'browser_console'
      }
    };

    console.log('%c📊 Extraction Complete!', 'font-size: 14px; font-weight: bold; color: green;');
    console.log(`Total states found: ${Object.keys(statesPaths).length}`);
    console.log('ViewBox:', viewBox);
    console.log('\nCopy the following JSON:');
    console.log(JSON.stringify(output, null, 2));

    // Also copy to clipboard if supported
    if (navigator.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(output, null, 2));
      console.log('%c✅ JSON copied to clipboard!', 'color: green;');
    }

    return output;
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('SVG Path Extractor for US States');
    console.log('\nUsage:');
    console.log('  node extract-svg-paths.js <input-svg-file> [output-json-file]');
    console.log('\nExample:');
    console.log('  node extract-svg-paths.js us-states.svg us-states-svg-paths.json');
    console.log('\nIf output file is not specified, results will be logged to console.\n');
    process.exit(0);
  }

  const inputFile = args[0];
  const outputFile = args[1] || null;

  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Error: File not found: ${inputFile}`);
    process.exit(1);
  }

  console.log(`📂 Reading SVG file: ${inputFile}\n`);
  extractSVGPaths(inputFile, outputFile);
}

// Export for use as a module
module.exports = {
  extractSVGPaths,
  browserExtractPaths
};

/**
 * BROWSER CONSOLE USAGE:
 *
 * 1. Open an SVG file in your browser (e.g., download one from SimpleMaps)
 * 2. Open DevTools (F12)
 * 3. Go to Console tab
 * 4. Paste the browserExtractPaths function from above
 * 5. Call: browserExtractPaths()
 * 6. Copy the JSON output to your us-states-svg-paths.json file
 *
 * NODE.JS USAGE:
 *
 * 1. Download an SVG file (e.g., from SimpleMaps)
 * 2. Run: node extract-svg-paths.js path/to/us-states.svg us-states-svg-paths.json
 * 3. Use the generated JSON file in your React component
 */
