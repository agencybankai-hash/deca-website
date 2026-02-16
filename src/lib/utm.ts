/**
 * UTM Tracking Utilities for DECA Windows
 *
 * UTM Structure Convention:
 * - utm_source:   traffic source (google, facebook, bing, email, partner)
 * - utm_medium:   marketing medium (cpc, organic, social, email, referral)
 * - utm_campaign: campaign name (brand_search, tilt_turn_exact, retargeting_q1)
 * - utm_term:     paid keyword (tilt+turn+windows+massachusetts)
 * - utm_content:  ad variation / CTA identifier (hero_cta, sidebar_banner_v2)
 */

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

/** Read UTM params from URL search params (client-side) */
export function getUTMFromURL(): UTMParams {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_term: params.get("utm_term") || undefined,
    utm_content: params.get("utm_content") || undefined,
  };
}

/** Store UTM params in sessionStorage for attribution across pages */
export function persistUTM(): void {
  if (typeof window === "undefined") return;
  const utm = getUTMFromURL();
  if (utm.utm_source) {
    sessionStorage.setItem("deca_utm", JSON.stringify(utm));
  }
}

/** Retrieve stored UTM params */
export function getStoredUTM(): UTMParams {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem("deca_utm");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

/** Build a URL with UTM params appended */
export function buildUTMUrl(baseUrl: string, params: UTMParams): string {
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });
  return url.toString();
}

/**
 * Pre-built UTM templates for common campaigns
 * Usage: buildUTMUrl("https://www.decawindows.com/quote", UTM_TEMPLATES.google_brand)
 */
export const UTM_TEMPLATES = {
  google_brand: {
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "brand_search",
  },
  google_tilt_turn: {
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "tilt_turn_windows",
  },
  google_replacement: {
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "replacement_windows_ma",
  },
  google_merchant: {
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "merchant_center_pla",
  },
  facebook_retargeting: {
    utm_source: "facebook",
    utm_medium: "cpc",
    utm_campaign: "retargeting_visitors",
  },
  email_newsletter: {
    utm_source: "email",
    utm_medium: "email",
    utm_campaign: "monthly_newsletter",
  },
} as const;
