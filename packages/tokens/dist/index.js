"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeights: () => lineHeights,
  radii: () => radii,
  space: () => space
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
var colors = {
  "neutral-1000": "#181826",
  "neutral-900": "#212134",
  "neutral-800": "#32324D",
  "neutral-700": "#4A4A6A",
  "neutral-600": "#666687",
  "neutral-500": "#8E8EA9",
  "neutral-400": "#A5A5BA",
  "neutral-300": "#C0C0CF",
  "neutral-200": "#DCDCE4",
  "neutral-150": "#EAEAEF",
  "neutral-100": "#F6F6F9",
  "neutral-0": "#FFFFFF",
  "primary-700": "#271FE0",
  "primary-600": "#4945FF",
  "primary-500": "#7B79FF",
  "primary-400": "#D9D8FF",
  "primary-300": "#F0F0FF",
  "warning-700": "#BE5D01",
  "warning-600": "#D9822F",
  "warning-500": "#F29D41",
  "warning-200": "#FAE7B9",
  "warning-100": "#FDF4DC",
  "success-700": "#2F6846",
  "success-600": "#328048",
  "success-500": "#5CB176",
  "success-200": "#C6F0C2",
  "success-100": "#EAFBE7",
  "secondary-700": "#006096",
  "secondary-600": "#0C75AF",
  "secondary-500": "#66B7F1",
  "secondary-200": "#B8E1FF",
  "secondary-100": "#EAF5FF",
  "danger-700": "#B72B1A",
  "danger-600": "#D02B20",
  "danger-500": "#EE5E52",
  "danger-200": "#F5C0B8",
  "danger-100": "#FCECEA",
  "alternative-700": "#8312D1",
  "alternative-600": "#9736E8",
  "alternative-500": "#AC73E6",
  "alternative-200": "#E0C1F4",
  "alternative-100": "#F6ECFC",
  "primary-button-neutral-0": "#FFFFFF",
  "primary-button-primary-600": "#4945FF",
  "primary-button-primary-500": "#7B79FF",
  "dark-neutral-0": "#212134",
  "dark-neutral-100": "#181826",
  "dark-neutral-150": "#32324d",
  "dark-neutral-200": "#4a4a6a",
  "dark-neutral-300": "#666687",
  "dark-neutral-400": "#a5a5ba",
  // Mesma cor
  "dark-neutral-500": "#c0c0cf",
  "dark-neutral-600": "#a5a5ba",
  // Mesma cor
  "dark-neutral-700": "#eaeaef",
  "dark-neutral-800": "#ffffff",
  // Mesma cor    
  "dark-neutral-900": "#ffffff",
  // Mesma cor
  "dark-neutral-1000": "#ffffff",
  // Mesma cor
  "dark-primary-100": "#181826",
  "dark-primary-200": "#4a4a6a",
  "dark-primary-500": "#4945ff",
  "dark-primary-600": "#7b79ff",
  // Mesma cor  
  "dark-primary-700": "#7b79ff",
  // Mesma cor
  "dark-secondary-100": "#181826",
  "dark-secondary-200": "#4a4a6a",
  "dark-secondary-500": "#66b7f1",
  // Mesma cor
  "dark-secondary-600": "#66b7f1",
  // Mesma cor
  "dark-secondary-700": "#b8e1ff",
  "dark-alternative-100": "#181826",
  "dark-alternative-200": "#4a4a6a",
  "dark-alternative-500": "#ac73e6",
  // Mesma cor
  "dark-alternative-600": "#ac73e6",
  // Mesma cor
  "dark-alternative-700": "#e0c1f4",
  "dark-warning-100": "#181826",
  "dark-warning-200": "#4a4a6a",
  "dark-warning-500": "#f29d41",
  // Mesma cor
  "dark-warning-600": "#f29d41",
  // Mesma cor
  "dark-warning-700": "#fae7b9",
  "dark-success-100": "#181826",
  "dark-success-200": "#4a4a64",
  "dark-success-500": "#5cb176",
  // Mesma cor
  "dark-success-600": "#5cb176",
  // Mesma cor
  "dark-success-700": "#c6f0c2",
  "dark-danger-100": "#181826",
  "dark-danger-200": "#4a4a64",
  "dark-danger-500": "#ee5e52",
  // Mesma cor
  "dark-danger-600": "#ee5e52",
  // Mesma cor
  "dark-danger-700": "#ee5e52",
  // Mesma cor
  "dark-button-neutral-0": "#ffffff",
  "dark-button-primary-500": "#7b79ff",
  "dark-button-primary-600": "#4945ff"
};

// src/font-sizes.ts
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};

// src/font-weights.ts
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};

// src/fonts.ts
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};

// src/line-heights.ts
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/radii.ts
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};

// src/space.ts
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space
});
