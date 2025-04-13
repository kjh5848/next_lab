(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/styles/movie-videos.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "container": "movie-videos-module__-fEI0G__container",
  "featuredVideo": "movie-videos-module__-fEI0G__featuredVideo",
  "noVideos": "movie-videos-module__-fEI0G__noVideos",
  "publishDate": "movie-videos-module__-fEI0G__publishDate",
  "sectionTitle": "movie-videos-module__-fEI0G__sectionTitle",
  "title": "movie-videos-module__-fEI0G__title",
  "videoCard": "movie-videos-module__-fEI0G__videoCard",
  "videoGrid": "movie-videos-module__-fEI0G__videoGrid",
  "videoSection": "movie-videos-module__-fEI0G__videoSection",
  "videoTitle": "movie-videos-module__-fEI0G__videoTitle",
  "videoWrapper": "movie-videos-module__-fEI0G__videoWrapper",
});
}}),
"[project]/components/LazyYoutubeEmbed.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LazyYoutubeEmbed": (()=>LazyYoutubeEmbed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$movie$2d$videos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/movie-videos.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LazyYoutubeEmbed({ videoKey, title, height = "100%" }) {
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 썸네일 이미지 URL (maxresdefault가 불안정할 수 있어 mqdefault를 대체로 사용)
    const thumbnailUrl = `https://img.youtube.com/vi/${videoKey}/mqdefault.jpg`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$movie$2d$videos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoWrapper,
        style: {
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden'
        },
        children: [
            !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsLoaded(true),
                style: {
                    backgroundImage: `url(${thumbnailUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    left: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '70px',
                            height: '50px',
                            backgroundColor: 'red',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 0,
                                height: 0,
                                borderTop: '10px solid transparent',
                                borderBottom: '10px solid transparent',
                                borderLeft: '20px solid white',
                                marginLeft: '5px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/LazyYoutubeEmbed.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/LazyYoutubeEmbed.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: 'absolute',
                            bottom: '10px',
                            left: '10px',
                            color: 'white',
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            padding: '3px 6px',
                            borderRadius: '3px',
                            fontSize: '12px'
                        },
                        children: "클릭하여 재생"
                    }, void 0, false, {
                        fileName: "[project]/components/LazyYoutubeEmbed.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LazyYoutubeEmbed.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this),
            isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                },
                src: `https://www.youtube.com/embed/${videoKey}?autoplay=1`,
                title: title,
                frameBorder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true
            }, void 0, false, {
                fileName: "[project]/components/LazyYoutubeEmbed.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LazyYoutubeEmbed.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(LazyYoutubeEmbed, "IYJBVyHsXBw9t28YX/YBiMCcttM=");
_c = LazyYoutubeEmbed;
var _c;
__turbopack_context__.k.register(_c, "LazyYoutubeEmbed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_3d1f9bf2._.js.map