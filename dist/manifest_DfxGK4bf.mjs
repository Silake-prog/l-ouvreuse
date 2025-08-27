import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_55BT9lWN.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/simonbrigode/Downloads/l-ouvreuse/","cacheDir":"file:///Users/simonbrigode/Downloads/l-ouvreuse/node_modules/.astro/","outDir":"file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/","srcDir":"file:///Users/simonbrigode/Downloads/l-ouvreuse/src/","publicDir":"file:///Users/simonbrigode/Downloads/l-ouvreuse/public/","buildClientDir":"file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/client/","buildServerDir":"file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/server/","adapterName":"","routes":[{"file":"file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/a-propos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/a-propos","isIndex":false,"type":"page","pattern":"^\\/a-propos\\/?$","segments":[[{"content":"a-propos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/a-propos.astro","pathname":"/a-propos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/articles/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/auteures/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/auteures","isIndex":true,"type":"page","pattern":"^\\/auteures\\/?$","segments":[[{"content":"auteures","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auteures/index.astro","pathname":"/auteures","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/newsletter/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/newsletter","isIndex":false,"type":"page","pattern":"^\\/newsletter\\/?$","segments":[[{"content":"newsletter","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/newsletter.astro","pathname":"/newsletter","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/rubriques/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rubriques","isIndex":true,"type":"page","pattern":"^\\/rubriques\\/?$","segments":[[{"content":"rubriques","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rubriques/index.astro","pathname":"/rubriques","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/sitemap.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sitemap.xml","isIndex":false,"type":"endpoint","pattern":"^\\/sitemap\\.xml\\/?$","segments":[[{"content":"sitemap.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sitemap.xml.ts","pathname":"/sitemap.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/articles/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/a-propos.astro",{"propagation":"none","containsHead":true}],["/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/auteures/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/auteures/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/newsletter.astro",{"propagation":"none","containsHead":true}],["/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/rubriques/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/rubriques/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/auteures/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/auteures/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rubriques/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rubriques/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/simonbrigode/Downloads/l-ouvreuse/src/pages/sitemap.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/sitemap.xml@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/a-propos@_@astro":"pages/a-propos.astro.mjs","\u0000@astro-page:src/pages/articles/[slug]@_@astro":"pages/articles/_slug_.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/auteures/[slug]@_@astro":"pages/auteures/_slug_.astro.mjs","\u0000@astro-page:src/pages/auteures/index@_@astro":"pages/auteures.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/newsletter@_@astro":"pages/newsletter.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/rubriques/[slug]@_@astro":"pages/rubriques/_slug_.astro.mjs","\u0000@astro-page:src/pages/rubriques/index@_@astro":"pages/rubriques.astro.mjs","\u0000@astro-page:src/pages/sitemap.xml@_@ts":"pages/sitemap.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DfxGK4bf.mjs","/Users/simonbrigode/Downloads/l-ouvreuse/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/simonbrigode/Downloads/l-ouvreuse/.astro/content-modules.mjs":"chunks/content-modules_D9Mm-n_9.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BGdLfL4J.mjs","/Users/simonbrigode/Downloads/l-ouvreuse/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DUYo-Lq5.mjs","/Users/simonbrigode/Downloads/l-ouvreuse/src/content/articles/2025-08-18-entretien-capitaine.mdx?astroPropagatedAssets":"chunks/2025-08-18-entretien-capitaine_BUxwMuIr.mjs","/Users/simonbrigode/Downloads/l-ouvreuse/src/content/articles/2025-08-15-analyse-competitions.mdx?astroPropagatedAssets":"chunks/2025-08-15-analyse-competitions_o5O4wOjb.mjs","/Users/simonbrigode/Downloads/l-ouvreuse/src/content/articles/2025-08-20-paris-2025-natation.mdx?astroPropagatedAssets":"chunks/2025-08-20-paris-2025-natation_BlLGSeDI.mjs","/Users/simonbrigode/Downloads/l-ouvreuse/src/content/articles/2025-08-18-entretien-capitaine.mdx":"chunks/2025-08-18-entretien-capitaine_Chty3Wa0.mjs","/Users/simonbrigode/Downloads/l-ouvreuse/src/content/articles/2025-08-15-analyse-competitions.mdx":"chunks/2025-08-15-analyse-competitions__egKjfna.mjs","/Users/simonbrigode/Downloads/l-ouvreuse/src/content/articles/2025-08-20-paris-2025-natation.mdx":"chunks/2025-08-20-paris-2025-natation_CzGt74Oc.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/a-propos/index.html","/file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/articles/index.html","/file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/auteures/index.html","/file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/contact/index.html","/file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/newsletter/index.html","/file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/rss.xml","/file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/rubriques/index.html","/file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/sitemap.xml","/file:///Users/simonbrigode/Downloads/l-ouvreuse/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"zajr+TUciYvOvS0bKNB7KH5rXSrxR856/I9aagBepIo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
