const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
}
function siteUrl() {
  return Object.assign(__vite_import_meta_env__, { _: process.env._ })?.PUBLIC_SITE_URL || "";
}

export { formatDate as f, siteUrl as s };
