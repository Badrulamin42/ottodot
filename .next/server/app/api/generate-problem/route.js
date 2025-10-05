"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/generate-problem/route";
exports.ids = ["app/api/generate-problem/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgenerate-problem%2Froute&page=%2Fapi%2Fgenerate-problem%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-problem%2Froute.ts&appDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgenerate-problem%2Froute&page=%2Fapi%2Fgenerate-problem%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-problem%2Froute.ts&appDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_badrulamin_OneDrive_Desktop_ottodot_ottodot_coding_task_full_stack_app_api_generate_problem_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/generate-problem/route.ts */ \"(rsc)/./app/api/generate-problem/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/generate-problem/route\",\n        pathname: \"/api/generate-problem\",\n        filename: \"route\",\n        bundlePath: \"app/api/generate-problem/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\badrulamin\\\\OneDrive\\\\Desktop\\\\ottodot\\\\ottodot-coding-task-full-stack\\\\app\\\\api\\\\generate-problem\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_badrulamin_OneDrive_Desktop_ottodot_ottodot_coding_task_full_stack_app_api_generate_problem_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/generate-problem/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnZW5lcmF0ZS1wcm9ibGVtJTJGcm91dGUmcGFnZT0lMkZhcGklMkZnZW5lcmF0ZS1wcm9ibGVtJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ2VuZXJhdGUtcHJvYmxlbSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNiYWRydWxhbWluJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDb3R0b2RvdCU1Q290dG9kb3QtY29kaW5nLXRhc2stZnVsbC1zdGFjayU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDYmFkcnVsYW1pbiU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q290dG9kb3QlNUNvdHRvZG90LWNvZGluZy10YXNrLWZ1bGwtc3RhY2smaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDdUU7QUFDcEo7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoLXByb2JsZW0tZ2VuZXJhdG9yLz80MDYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGJhZHJ1bGFtaW5cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxvdHRvZG90XFxcXG90dG9kb3QtY29kaW5nLXRhc2stZnVsbC1zdGFja1xcXFxhcHBcXFxcYXBpXFxcXGdlbmVyYXRlLXByb2JsZW1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dlbmVyYXRlLXByb2JsZW0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZW5lcmF0ZS1wcm9ibGVtXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9nZW5lcmF0ZS1wcm9ibGVtL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcYmFkcnVsYW1pblxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXG90dG9kb3RcXFxcb3R0b2RvdC1jb2RpbmctdGFzay1mdWxsLXN0YWNrXFxcXGFwcFxcXFxhcGlcXFxcZ2VuZXJhdGUtcHJvYmxlbVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9nZW5lcmF0ZS1wcm9ibGVtL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgenerate-problem%2Froute&page=%2Fapi%2Fgenerate-problem%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-problem%2Froute.ts&appDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/generate-problem/route.ts":
/*!*******************************************!*\
  !*** ./app/api/generate-problem/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google/generative-ai */ \"(rsc)/./node_modules/@google/generative-ai/dist/index.mjs\");\n\n\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(\"https://fwqgpzfxywhpurfszefr.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cWdwemZ4eXdocHVyZnN6ZWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MTgxNDYsImV4cCI6MjA3NTE5NDE0Nn0.b3-o9Wv1vY4EiLF1HTaWZ8jJ9jLq10nDkM2DyuOJaBk\");\nconst genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.GoogleGenerativeAI(process.env.GOOGLE_API_KEY);\nasync function POST() {\n    try {\n        const model = genAI.getGenerativeModel({\n            model: \"gemini-2.5-flash\"\n        });\n        const topics = [\n            \"angles on a straight line\",\n            \"angles at a point\",\n            \"vertically opposite angles\",\n            \"isosceles triangle\",\n            \"equilateral triangle\",\n            \"right-angled triangle\",\n            \"parallelogram\",\n            \"rhombus\",\n            \"trapezium\"\n        ];\n        const randomTopic = topics[Math.floor(Math.random() * topics.length)];\n        const prompt = `\r\n    You are a math teacher for 13-year-old students.\r\n    Create one geometry question about \"${randomTopic}\".\r\n    The problem should be realistic, clearly described, and solvable with integer answers.\r\n    Return ONLY raw JSON:\r\n    {\r\n      \"problem_text\": \"the question text\",\r\n      \"final_answer\": number\r\n    }\r\n    `;\n        const result = await model.generateContent(prompt);\n        let text = result.response.text();\n        // Strip markdown fences\n        text = text.replace(/```json|```/g, \"\").trim();\n        const json = JSON.parse(text);\n        const { data, error } = await supabase.from(\"math_problem_sessions\").insert({\n            problem_text: json.problem_text,\n            final_answer: json.final_answer\n        }).select().single();\n        if (error) throw error;\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            session: data\n        });\n    } catch (error) {\n        console.error(error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to generate problem\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbmVyYXRlLXByb2JsZW0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNVO0FBQ007QUFFMUQsTUFBTUcsV0FBV0YsbUVBQVlBLENBQzNCRywwQ0FBb0MsRUFDcENBLGtOQUF5QztBQUczQyxNQUFNSSxRQUFRLElBQUlOLHFFQUFrQkEsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDSSxjQUFjO0FBRXhELGVBQWVDO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxRQUFRSCxNQUFNSSxrQkFBa0IsQ0FBQztZQUFFRCxPQUFPO1FBQW1CO1FBRW5FLE1BQU1FLFNBQVM7WUFDYjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtRQUVELE1BQU1DLGNBQWNELE1BQU0sQ0FBQ0UsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtKLE9BQU9LLE1BQU0sRUFBRTtRQUVyRSxNQUFNQyxTQUFTLENBQUM7O3dDQUVvQixFQUFFTCxZQUFZOzs7Ozs7O0lBT2xELENBQUM7UUFHRCxNQUFNTSxTQUFTLE1BQU1ULE1BQU1VLGVBQWUsQ0FBQ0Y7UUFDM0MsSUFBSUcsT0FBT0YsT0FBT0csUUFBUSxDQUFDRCxJQUFJO1FBRS9CLHdCQUF3QjtRQUN4QkEsT0FBT0EsS0FBS0UsT0FBTyxDQUFDLGdCQUFnQixJQUFJQyxJQUFJO1FBRTVDLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ047UUFFeEIsTUFBTSxFQUFFTyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU0zQixTQUMzQjRCLElBQUksQ0FBQyx5QkFDTEMsTUFBTSxDQUFDO1lBQ05DLGNBQWNQLEtBQUtPLFlBQVk7WUFDL0JDLGNBQWNSLEtBQUtRLFlBQVk7UUFDakMsR0FDQ0MsTUFBTSxHQUNOQyxNQUFNO1FBRVQsSUFBSU4sT0FBTyxNQUFNQTtRQUVqQixPQUFPOUIsa0ZBQVlBLENBQUMwQixJQUFJLENBQUM7WUFBRVcsU0FBU1I7UUFBSztJQUMzQyxFQUFFLE9BQU9DLE9BQVk7UUFDbkJRLFFBQVFSLEtBQUssQ0FBQ0E7UUFDZCxPQUFPOUIsa0ZBQVlBLENBQUMwQixJQUFJLENBQUM7WUFBRUksT0FBTztRQUE2QixHQUFHO1lBQUVTLFFBQVE7UUFBSTtJQUNsRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0aC1wcm9ibGVtLWdlbmVyYXRvci8uL2FwcC9hcGkvZ2VuZXJhdGUtcHJvYmxlbS9yb3V0ZS50cz9lYzBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXHJcbmltcG9ydCB7IEdvb2dsZUdlbmVyYXRpdmVBSSB9IGZyb20gJ0Bnb29nbGUvZ2VuZXJhdGl2ZS1haSdcclxuXHJcbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFxyXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCEsXHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkhXHJcbilcclxuXHJcbmNvbnN0IGdlbkFJID0gbmV3IEdvb2dsZUdlbmVyYXRpdmVBSShwcm9jZXNzLmVudi5HT09HTEVfQVBJX0tFWSEpXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbW9kZWwgPSBnZW5BSS5nZXRHZW5lcmF0aXZlTW9kZWwoeyBtb2RlbDogXCJnZW1pbmktMi41LWZsYXNoXCIgfSlcclxuXHJcbiAgICBjb25zdCB0b3BpY3MgPSBbXHJcbiAgICAgIFwiYW5nbGVzIG9uIGEgc3RyYWlnaHQgbGluZVwiLFxyXG4gICAgICBcImFuZ2xlcyBhdCBhIHBvaW50XCIsXHJcbiAgICAgIFwidmVydGljYWxseSBvcHBvc2l0ZSBhbmdsZXNcIixcclxuICAgICAgXCJpc29zY2VsZXMgdHJpYW5nbGVcIixcclxuICAgICAgXCJlcXVpbGF0ZXJhbCB0cmlhbmdsZVwiLFxyXG4gICAgICBcInJpZ2h0LWFuZ2xlZCB0cmlhbmdsZVwiLFxyXG4gICAgICBcInBhcmFsbGVsb2dyYW1cIixcclxuICAgICAgXCJyaG9tYnVzXCIsXHJcbiAgICAgIFwidHJhcGV6aXVtXCJcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgcmFuZG9tVG9waWMgPSB0b3BpY3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdG9waWNzLmxlbmd0aCldO1xyXG5cclxuICAgIGNvbnN0IHByb21wdCA9IGBcclxuICAgIFlvdSBhcmUgYSBtYXRoIHRlYWNoZXIgZm9yIDEzLXllYXItb2xkIHN0dWRlbnRzLlxyXG4gICAgQ3JlYXRlIG9uZSBnZW9tZXRyeSBxdWVzdGlvbiBhYm91dCBcIiR7cmFuZG9tVG9waWN9XCIuXHJcbiAgICBUaGUgcHJvYmxlbSBzaG91bGQgYmUgcmVhbGlzdGljLCBjbGVhcmx5IGRlc2NyaWJlZCwgYW5kIHNvbHZhYmxlIHdpdGggaW50ZWdlciBhbnN3ZXJzLlxyXG4gICAgUmV0dXJuIE9OTFkgcmF3IEpTT046XHJcbiAgICB7XHJcbiAgICAgIFwicHJvYmxlbV90ZXh0XCI6IFwidGhlIHF1ZXN0aW9uIHRleHRcIixcclxuICAgICAgXCJmaW5hbF9hbnN3ZXJcIjogbnVtYmVyXHJcbiAgICB9XHJcbiAgICBgO1xyXG5cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtb2RlbC5nZW5lcmF0ZUNvbnRlbnQocHJvbXB0KVxyXG4gICAgbGV0IHRleHQgPSByZXN1bHQucmVzcG9uc2UudGV4dCgpXHJcblxyXG4gICAgLy8gU3RyaXAgbWFya2Rvd24gZmVuY2VzXHJcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9gYGBqc29ufGBgYC9nLCAnJykudHJpbSgpXHJcblxyXG4gICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UodGV4dClcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbWF0aF9wcm9ibGVtX3Nlc3Npb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgcHJvYmxlbV90ZXh0OiBqc29uLnByb2JsZW1fdGV4dCxcclxuICAgICAgICBmaW5hbF9hbnN3ZXI6IGpzb24uZmluYWxfYW5zd2VyLFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLnNpbmdsZSgpXHJcblxyXG4gICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHNlc3Npb246IGRhdGEgfSlcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZ2VuZXJhdGUgcHJvYmxlbScgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY3JlYXRlQ2xpZW50IiwiR29vZ2xlR2VuZXJhdGl2ZUFJIiwic3VwYWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiLCJnZW5BSSIsIkdPT0dMRV9BUElfS0VZIiwiUE9TVCIsIm1vZGVsIiwiZ2V0R2VuZXJhdGl2ZU1vZGVsIiwidG9waWNzIiwicmFuZG9tVG9waWMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJwcm9tcHQiLCJyZXN1bHQiLCJnZW5lcmF0ZUNvbnRlbnQiLCJ0ZXh0IiwicmVzcG9uc2UiLCJyZXBsYWNlIiwidHJpbSIsImpzb24iLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwiaW5zZXJ0IiwicHJvYmxlbV90ZXh0IiwiZmluYWxfYW5zd2VyIiwic2VsZWN0Iiwic2luZ2xlIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/generate-problem/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/@google","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgenerate-problem%2Froute&page=%2Fapi%2Fgenerate-problem%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-problem%2Froute.ts&appDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();