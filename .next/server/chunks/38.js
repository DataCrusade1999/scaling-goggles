"use strict";
exports.id = 38;
exports.ids = [38];
exports.modules = {

/***/ 8008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Layout = ({ title , children ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title || "serious-effort"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 872:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export authenticateUser */
/* harmony import */ var _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7897);
/* harmony import */ var _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6417);
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4935);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_validations__WEBPACK_IMPORTED_MODULE_4__]);
_validations__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const authenticateUser = async (rawEmail, rawPassword)=>{
    const { email , password  } = _validations__WEBPACK_IMPORTED_MODULE_4__/* .Login.parse */ .m3.parse({
        email: rawEmail,
        password: rawPassword
    });
    const user = await db__WEBPACK_IMPORTED_MODULE_3__["default"].user.findFirst({
        where: {
            email
        }
    });
    if (!user) throw new blitz__WEBPACK_IMPORTED_MODULE_2__.AuthenticationError();
    const result = await _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__.SecurePassword.verify(user.hashedPassword, password);
    if (result === _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__.SecurePassword.VALID_NEEDS_REHASH) {
        // Upgrade hashed password with a more secure hash
        const improvedHash = await _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__.SecurePassword.hash(password);
        await db__WEBPACK_IMPORTED_MODULE_3__["default"].user.update({
            where: {
                id: user.id
            },
            data: {
                hashedPassword: improvedHash
            }
        });
    }
    const { hashedPassword , ...rest } = user;
    return rest;
};
const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(_validations__WEBPACK_IMPORTED_MODULE_4__/* .Login */ .m3), async ({ email , password  }, ctx)=>{
    // This throws an error if credentials are invalid
    const user = await authenticateUser(email, password);
    await ctx.session.$create({
        userId: user.id,
        role: user.role
    });
    return user;
});
__internal_rpcHandler._resolverName = "login";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/login";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;