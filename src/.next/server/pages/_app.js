"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/global.ts

/* harmony default export */ const global = (external_styled_components_.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  .main-container {
    min-height: 70vh;
  }
`);

;// CONCATENATED MODULE: ./styles/FooterStyled.ts

const Footer = external_styled_components_default().footer.withConfig({
    componentId: "sc-7355745b-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  height: 150px;
  margin-top: 2rem;
  border-top: 3px solid #111;
  color: #fff;
  .span {
    font-weight: bold;
  }
`;
/* harmony default export */ const FooterStyled = (Footer);

;// CONCATENATED MODULE: ./components/Footer.tsx


function Footer_Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(FooterStyled, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "PokeNext"
                }),
                " \xa9 2022"
            ]
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./styles/NavStyled.ts

const Nav = external_styled_components_default().nav.withConfig({
    componentId: "sc-f87e51-0"
})`
  padding: 1em 1.2em;
  margin-bottom: 2em;
  background-color: #333;
  color: #fff;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 980px;
    max-width: 100%;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo h1 {
    margin-left: .5em;
  }

  .link_items {
    display: flex;
    list-style: none;
  }

  .link_items li {
    margin-right: 1.3em;
  }

  .link_items a {
    color: #fff;
    text-decoration: none;
    padding: 5px;
    transition: .4s;
    border-bottom: 2px solid transparent;
  }

  .link_items a:hover {
    border-color: #fff;
  }
`;
/* harmony default export */ const NavStyled = (Nav);

;// CONCATENATED MODULE: ./components/Navbar.tsx




function Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx(NavStyled, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "logo",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/images/pokeball.png",
                            width: "30",
                            height: "30",
                            alt: "pokeball"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Pok\xe9Next"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "link_items",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Home"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "About"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Layout.tsx




function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "images/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "PokeNext"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "main-container",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(global, {})
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,676,664], () => (__webpack_exec__(811)));
module.exports = __webpack_exports__;

})();