"use strict";
exports.id = 774;
exports.ids = [774];
exports.modules = {

/***/ 4678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Al": () => (/* binding */ Signup),
/* harmony export */   "GR": () => (/* binding */ ChangePassword),
/* harmony export */   "m3": () => (/* binding */ Login),
/* harmony export */   "oP": () => (/* binding */ ForgotPassword),
/* harmony export */   "tq": () => (/* binding */ ResetPassword)
/* harmony export */ });
/* unused harmony exports email, password, ConnectWithMe */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const email = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email().transform((str)=>str.toLowerCase().trim());
const password = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(10).max(100).transform((str)=>str.trim());
const Signup = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    email,
    password
});
const Login = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    email,
    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const ForgotPassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    email
});
const ResetPassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    password: password,
    passwordConfirmation: password,
    token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
}).refine((data)=>data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: [
        "passwordConfirmation"
    ]
});
const ChangePassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    currentPassword: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    newPassword: password
});
const ConnectWithMe = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    email,
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    message: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authenticateUser": () => (/* binding */ authenticateUser),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7897);
/* harmony import */ var _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3687);
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4678);
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