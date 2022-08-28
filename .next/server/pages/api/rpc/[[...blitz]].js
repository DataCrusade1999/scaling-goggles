"use strict";
(() => {
var exports = {};
exports.id = 99;
exports.ids = [99];
exports.modules = {

/***/ 7897:
/***/ ((module) => {

module.exports = require("@blitzjs/auth");

/***/ }),

/***/ 5481:
/***/ ((module) => {

module.exports = require("@blitzjs/rpc");

/***/ }),

/***/ 8910:
/***/ ((module) => {

module.exports = require("@tanstack/react-query");

/***/ }),

/***/ 4405:
/***/ ((module) => {

module.exports = require("blitz");

/***/ }),

/***/ 6974:
/***/ ((module) => {

module.exports = require("debug");

/***/ }),

/***/ 7318:
/***/ ((module) => {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 3687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ db_0)
});

// EXTERNAL MODULE: external "blitz"
var external_blitz_ = __webpack_require__(4405);
;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./db/index.ts


const EnhancedPrisma = (0,external_blitz_.enhancePrisma)(client_namespaceObject.PrismaClient);

const db = new EnhancedPrisma();
/* harmony default export */ const db_0 = (db);


/***/ }),

/***/ 3104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _blitz_)
});

// EXTERNAL MODULE: external "@blitzjs/rpc"
var rpc_ = __webpack_require__(5481);
// EXTERNAL MODULE: ./node_modules/@blitzjs/next/dist/index-server.cjs
var index_server = __webpack_require__(3407);
// EXTERNAL MODULE: external "@blitzjs/auth"
var auth_ = __webpack_require__(7897);
// EXTERNAL MODULE: ./db/index.ts + 1 modules
var db = __webpack_require__(3687);
;// CONCATENATED MODULE: ./app/blitz-client.ts



const authConfig = {
    cookiePrefix: "serious-effort-cookie-prefix"
};
const { withBlitz  } = (0,index_server/* setupBlitzClient */.qd)({
    plugins: [
        (0,auth_.AuthClientPlugin)(authConfig),
        (0,rpc_.BlitzRpcPlugin)({})
    ]
});

;// CONCATENATED MODULE: ./app/blitz-server.ts





const { gSSP , gSP , api  } = (0,index_server/* setupBlitzServer */.te)({
    plugins: [
        (0,auth_.AuthServerPlugin)({
            ...authConfig,
            storage: (0,auth_.PrismaStorage)(db["default"]),
            isAuthorized: auth_.simpleRolesIsAuthorized
        }), 
    ]
});

;// CONCATENATED MODULE: ./pages/api/rpc/[[...blitz]].ts



/* harmony default export */ const _blitz_ = (api((0,rpc_.rpcHandler)({
    onError: console.log
})));
(0,rpc_.__internal_addBlitzRpcResolver)("/changePassword", ()=>Promise.all(/* import() */[__webpack_require__.e(774), __webpack_require__.e(869)]).then(__webpack_require__.bind(__webpack_require__, 7869)));
(0,rpc_.__internal_addBlitzRpcResolver)("/forgotPassword", ()=>__webpack_require__.e(/* import() */ 739).then(__webpack_require__.bind(__webpack_require__, 2739)));
(0,rpc_.__internal_addBlitzRpcResolver)("/login", ()=>__webpack_require__.e(/* import() */ 774).then(__webpack_require__.bind(__webpack_require__, 7774)));
(0,rpc_.__internal_addBlitzRpcResolver)("/logout", ()=>__webpack_require__.e(/* import() */ 589).then(__webpack_require__.bind(__webpack_require__, 2589)));
(0,rpc_.__internal_addBlitzRpcResolver)("/resetPassword", ()=>Promise.all(/* import() */[__webpack_require__.e(774), __webpack_require__.e(552)]).then(__webpack_require__.bind(__webpack_require__, 9552)));
(0,rpc_.__internal_addBlitzRpcResolver)("/signup", ()=>__webpack_require__.e(/* import() */ 648).then(__webpack_require__.bind(__webpack_require__, 648)));
(0,rpc_.__internal_addBlitzRpcResolver)("/getCurrentUser", ()=>__webpack_require__.e(/* import() */ 252).then(__webpack_require__.bind(__webpack_require__, 6252)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [407], () => (__webpack_exec__(3104)));
module.exports = __webpack_exports__;

})();