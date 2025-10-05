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
exports.id = "app/api/submit-answer/route";
exports.ids = ["app/api/submit-answer/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubmit-answer%2Froute&page=%2Fapi%2Fsubmit-answer%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-answer%2Froute.ts&appDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubmit-answer%2Froute&page=%2Fapi%2Fsubmit-answer%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-answer%2Froute.ts&appDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_badrulamin_OneDrive_Desktop_ottodot_ottodot_coding_task_full_stack_app_api_submit_answer_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/submit-answer/route.ts */ \"(rsc)/./app/api/submit-answer/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/submit-answer/route\",\n        pathname: \"/api/submit-answer\",\n        filename: \"route\",\n        bundlePath: \"app/api/submit-answer/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\badrulamin\\\\OneDrive\\\\Desktop\\\\ottodot\\\\ottodot-coding-task-full-stack\\\\app\\\\api\\\\submit-answer\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_badrulamin_OneDrive_Desktop_ottodot_ottodot_coding_task_full_stack_app_api_submit_answer_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/submit-answer/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdWJtaXQtYW5zd2VyJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzdWJtaXQtYW5zd2VyJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3VibWl0LWFuc3dlciUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNiYWRydWxhbWluJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDb3R0b2RvdCU1Q290dG9kb3QtY29kaW5nLXRhc2stZnVsbC1zdGFjayU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDYmFkcnVsYW1pbiU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q290dG9kb3QlNUNvdHRvZG90LWNvZGluZy10YXNrLWZ1bGwtc3RhY2smaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDb0U7QUFDako7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoLXByb2JsZW0tZ2VuZXJhdG9yLz85ZWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGJhZHJ1bGFtaW5cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxvdHRvZG90XFxcXG90dG9kb3QtY29kaW5nLXRhc2stZnVsbC1zdGFja1xcXFxhcHBcXFxcYXBpXFxcXHN1Ym1pdC1hbnN3ZXJcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N1Ym1pdC1hbnN3ZXIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdWJtaXQtYW5zd2VyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdWJtaXQtYW5zd2VyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcYmFkcnVsYW1pblxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXG90dG9kb3RcXFxcb3R0b2RvdC1jb2RpbmctdGFzay1mdWxsLXN0YWNrXFxcXGFwcFxcXFxhcGlcXFxcc3VibWl0LWFuc3dlclxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zdWJtaXQtYW5zd2VyL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubmit-answer%2Froute&page=%2Fapi%2Fsubmit-answer%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-answer%2Froute.ts&appDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/submit-answer/route.ts":
/*!****************************************!*\
  !*** ./app/api/submit-answer/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google/generative-ai */ \"(rsc)/./node_modules/@google/generative-ai/dist/index.mjs\");\n\n\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(\"https://fwqgpzfxywhpurfszefr.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cWdwemZ4eXdocHVyZnN6ZWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MTgxNDYsImV4cCI6MjA3NTE5NDE0Nn0.b3-o9Wv1vY4EiLF1HTaWZ8jJ9jLq10nDkM2DyuOJaBk\");\nconst genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_1__.GoogleGenerativeAI(process.env.GOOGLE_API_KEY);\nasync function POST(req) {\n    try {\n        const { sessionId, userAnswer } = await req.json();\n        // Fetch correct answer\n        const { data: session } = await supabase.from(\"math_problem_sessions\").select(\"*\").eq(\"id\", sessionId).single();\n        if (!session) throw new Error(\"Session not found\");\n        const isCorrect = Number(userAnswer) === Number(session.final_answer);\n        // Generate feedback using AI\n        const model = genAI.getGenerativeModel({\n            model: \"gemini-2.5-flash\"\n        });\n        const prompt = `\r\n      The user solved this math problem:\r\n      Problem: ${session.problem_text}\r\n      Correct Answer: ${session.final_answer}\r\n      User Answer: ${userAnswer}\r\n\r\n      Provide short feedback (1–2 sentences).\r\n      If correct, praise them; if incorrect, gently explain why.\r\n    `;\n        const result = await model.generateContent(prompt);\n        const feedback = result.response.text();\n        const { data: submission, error } = await supabase.from(\"math_problem_submissions\").insert({\n            session_id: sessionId,\n            user_answer: userAnswer,\n            is_correct: isCorrect,\n            feedback\n        }).select().single();\n        if (error) throw error;\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            feedback,\n            isCorrect\n        });\n    } catch (error) {\n        console.error(error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Submission failed\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N1Ym1pdC1hbnN3ZXIvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNVO0FBQ007QUFFMUQsTUFBTUcsV0FBV0YsbUVBQVlBLENBQzNCRywwQ0FBb0MsRUFDcENBLGtOQUF5QztBQUczQyxNQUFNSSxRQUFRLElBQUlOLHFFQUFrQkEsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDSSxjQUFjO0FBRXhELGVBQWVDLEtBQUtDLEdBQVk7SUFDckMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FBRyxNQUFNRixJQUFJRyxJQUFJO1FBRWhELHVCQUF1QjtRQUN2QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHLE1BQU1iLFNBQzdCYyxJQUFJLENBQUMseUJBQ0xDLE1BQU0sQ0FBQyxLQUNQQyxFQUFFLENBQUMsTUFBTVAsV0FDVFEsTUFBTTtRQUVULElBQUksQ0FBQ0osU0FBUyxNQUFNLElBQUlLLE1BQU07UUFFOUIsTUFBTUMsWUFBWUMsT0FBT1YsZ0JBQWdCVSxPQUFPUCxRQUFRUSxZQUFZO1FBRXBFLDZCQUE2QjtRQUM3QixNQUFNQyxRQUFRakIsTUFBTWtCLGtCQUFrQixDQUFDO1lBQUVELE9BQU87UUFBbUI7UUFDbkUsTUFBTUUsU0FBUyxDQUFDOztlQUVMLEVBQUVYLFFBQVFZLFlBQVksQ0FBQztzQkFDaEIsRUFBRVosUUFBUVEsWUFBWSxDQUFDO21CQUMxQixFQUFFWCxXQUFXOzs7O0lBSTVCLENBQUM7UUFDRCxNQUFNZ0IsU0FBUyxNQUFNSixNQUFNSyxlQUFlLENBQUNIO1FBQzNDLE1BQU1JLFdBQVdGLE9BQU9HLFFBQVEsQ0FBQ0MsSUFBSTtRQUVyQyxNQUFNLEVBQUVsQixNQUFNbUIsVUFBVSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNaEMsU0FDdkNjLElBQUksQ0FBQyw0QkFDTG1CLE1BQU0sQ0FBQztZQUNOQyxZQUFZekI7WUFDWjBCLGFBQWF6QjtZQUNiMEIsWUFBWWpCO1lBQ1pTO1FBQ0YsR0FDQ2IsTUFBTSxHQUNORSxNQUFNO1FBRVQsSUFBSWUsT0FBTyxNQUFNQTtRQUVqQixPQUFPbkMsa0ZBQVlBLENBQUNjLElBQUksQ0FBQztZQUFFaUI7WUFBVVQ7UUFBVTtJQUNqRCxFQUFFLE9BQU9hLE9BQU87UUFDZEssUUFBUUwsS0FBSyxDQUFDQTtRQUNkLE9BQU9uQyxrRkFBWUEsQ0FBQ2MsSUFBSSxDQUFDO1lBQUVxQixPQUFPO1FBQW9CLEdBQUc7WUFBRU0sUUFBUTtRQUFJO0lBQ3pFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoLXByb2JsZW0tZ2VuZXJhdG9yLy4vYXBwL2FwaS9zdWJtaXQtYW5zd2VyL3JvdXRlLnRzPzdjZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcclxuaW1wb3J0IHsgR29vZ2xlR2VuZXJhdGl2ZUFJIH0gZnJvbSAnQGdvb2dsZS9nZW5lcmF0aXZlLWFpJ1xyXG5cclxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoXHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMISxcclxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSFcclxuKVxyXG5cclxuY29uc3QgZ2VuQUkgPSBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJKHByb2Nlc3MuZW52LkdPT0dMRV9BUElfS0VZISlcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHNlc3Npb25JZCwgdXNlckFuc3dlciB9ID0gYXdhaXQgcmVxLmpzb24oKVxyXG5cclxuICAgIC8vIEZldGNoIGNvcnJlY3QgYW5zd2VyXHJcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdtYXRoX3Byb2JsZW1fc2Vzc2lvbnMnKVxyXG4gICAgICAuc2VsZWN0KCcqJylcclxuICAgICAgLmVxKCdpZCcsIHNlc3Npb25JZClcclxuICAgICAgLnNpbmdsZSgpXHJcblxyXG4gICAgaWYgKCFzZXNzaW9uKSB0aHJvdyBuZXcgRXJyb3IoJ1Nlc3Npb24gbm90IGZvdW5kJylcclxuXHJcbiAgICBjb25zdCBpc0NvcnJlY3QgPSBOdW1iZXIodXNlckFuc3dlcikgPT09IE51bWJlcihzZXNzaW9uLmZpbmFsX2Fuc3dlcilcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBmZWVkYmFjayB1c2luZyBBSVxyXG4gICAgY29uc3QgbW9kZWwgPSBnZW5BSS5nZXRHZW5lcmF0aXZlTW9kZWwoeyBtb2RlbDogXCJnZW1pbmktMi41LWZsYXNoXCIgfSlcclxuICAgIGNvbnN0IHByb21wdCA9IGBcclxuICAgICAgVGhlIHVzZXIgc29sdmVkIHRoaXMgbWF0aCBwcm9ibGVtOlxyXG4gICAgICBQcm9ibGVtOiAke3Nlc3Npb24ucHJvYmxlbV90ZXh0fVxyXG4gICAgICBDb3JyZWN0IEFuc3dlcjogJHtzZXNzaW9uLmZpbmFsX2Fuc3dlcn1cclxuICAgICAgVXNlciBBbnN3ZXI6ICR7dXNlckFuc3dlcn1cclxuXHJcbiAgICAgIFByb3ZpZGUgc2hvcnQgZmVlZGJhY2sgKDHigJMyIHNlbnRlbmNlcykuXHJcbiAgICAgIElmIGNvcnJlY3QsIHByYWlzZSB0aGVtOyBpZiBpbmNvcnJlY3QsIGdlbnRseSBleHBsYWluIHdoeS5cclxuICAgIGBcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1vZGVsLmdlbmVyYXRlQ29udGVudChwcm9tcHQpXHJcbiAgICBjb25zdCBmZWVkYmFjayA9IHJlc3VsdC5yZXNwb25zZS50ZXh0KClcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHN1Ym1pc3Npb24sIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbWF0aF9wcm9ibGVtX3N1Ym1pc3Npb25zJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgc2Vzc2lvbl9pZDogc2Vzc2lvbklkLFxyXG4gICAgICAgIHVzZXJfYW5zd2VyOiB1c2VyQW5zd2VyLFxyXG4gICAgICAgIGlzX2NvcnJlY3Q6IGlzQ29ycmVjdCxcclxuICAgICAgICBmZWVkYmFjayxcclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdCgpXHJcbiAgICAgIC5zaW5nbGUoKVxyXG5cclxuICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3JcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBmZWVkYmFjaywgaXNDb3JyZWN0IH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1N1Ym1pc3Npb24gZmFpbGVkJyB9LCB7IHN0YXR1czogNTAwIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjcmVhdGVDbGllbnQiLCJHb29nbGVHZW5lcmF0aXZlQUkiLCJzdXBhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsImdlbkFJIiwiR09PR0xFX0FQSV9LRVkiLCJQT1NUIiwicmVxIiwic2Vzc2lvbklkIiwidXNlckFuc3dlciIsImpzb24iLCJkYXRhIiwic2Vzc2lvbiIsImZyb20iLCJzZWxlY3QiLCJlcSIsInNpbmdsZSIsIkVycm9yIiwiaXNDb3JyZWN0IiwiTnVtYmVyIiwiZmluYWxfYW5zd2VyIiwibW9kZWwiLCJnZXRHZW5lcmF0aXZlTW9kZWwiLCJwcm9tcHQiLCJwcm9ibGVtX3RleHQiLCJyZXN1bHQiLCJnZW5lcmF0ZUNvbnRlbnQiLCJmZWVkYmFjayIsInJlc3BvbnNlIiwidGV4dCIsInN1Ym1pc3Npb24iLCJlcnJvciIsImluc2VydCIsInNlc3Npb25faWQiLCJ1c2VyX2Fuc3dlciIsImlzX2NvcnJlY3QiLCJjb25zb2xlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/submit-answer/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/@google","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubmit-answer%2Froute&page=%2Fapi%2Fsubmit-answer%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubmit-answer%2Froute.ts&appDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbadrulamin%5COneDrive%5CDesktop%5Cottodot%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();