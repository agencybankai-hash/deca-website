/**
 * Generate SVG path data for all US states from the pre-projected
 * Albers TopoJSON bundled with the us-atlas package.
 *
 * Because states-albers-10m.json is already in Albers USA projection,
 * we use geoPath with a null projection (identity transform).
 */
import { feature } from "topojson-client";
import { geoPath } from "d3-geo";
import { readFileSync, writeFileSync } from "fs";

// Load local TopoJSON (pre-projected Albers USA)
const raw = readFileSync("node_modules/us-atlas/states-albers-10m.json", "utf-8");
const topo = JSON.parse(raw);

// Convert to GeoJSON
const geojson = feature(topo, topo.objects.states);

// FIPS → abbreviation
const FIPS_MAP = {
  "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA",
  "08": "CO", "09": "CT", "10": "DE", "11": "DC", "12": "FL",
  "13": "GA", "15": "HI", "16": "ID", "17": "IL", "18": "IN",
  "19": "IA", "20": "KS", "21": "KY", "22": "LA", "23": "ME",
  "24": "MD", "25": "MA", "26": "MI", "27": "MN", "28": "MS",
  "29": "MO", "30": "MT", "31": "NE", "32": "NV", "33": "NH",
  "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND",
  "39": "OH", "40": "OK", "41": "OR", "42": "PA", "44": "RI",
  "45": "SC", "46": "SD", "47": "TN", "48": "TX", "49": "UT",
  "50": "VT", "51": "VA", "53": "WA", "54": "WV", "55": "WI",
  "56": "WY",
};

const STATE_NAMES = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", DC: "District of Columbia",
  FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho", IL: "Illinois",
  IN: "Indiana", IA: "Iowa", KS: "Kansas", KY: "Kentucky", LA: "Louisiana",
  ME: "Maine", MD: "Maryland", MA: "Massachusetts", MI: "Michigan",
  MN: "Minnesota", MS: "Mississippi", MO: "Missouri", MT: "Montana",
  NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota",
  OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania",
  RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota",
  TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont", VA: "Virginia",
  WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
};

// Identity projection (data is already projected)
const pathGenerator = geoPath().projection(null);

const result = {};

for (const feat of geojson.features) {
  const fips = feat.id;
  const abbr = FIPS_MAP[fips];
  if (!abbr) continue;

  const d = pathGenerator(feat);
  if (!d) continue;

  const centroid = pathGenerator.centroid(feat);
  if (!centroid || isNaN(centroid[0])) continue;

  result[abbr] = {
    abbr,
    name: STATE_NAMES[abbr],
    d,
    cx: Math.round(centroid[0] * 10) / 10,
    cy: Math.round(centroid[1] * 10) / 10,
  };
}

// Write output
const outPath = "src/data/us-states-paths.json";
writeFileSync(outPath, JSON.stringify(result, null, 2));
console.log(`✅ Generated ${Object.keys(result).length} state paths → ${outPath}`);
console.log("States:", Object.keys(result).sort().join(", "));

// Print viewBox info based on Albers USA default projection
console.log("Recommended viewBox: 0 0 975 610");
