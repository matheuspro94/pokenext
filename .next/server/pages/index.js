"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/HomeStyled.ts

const HomeStyled = external_styled_components_default().div.withConfig({
    componentId: "sc-6866d2ce-0"
})`
    max-width: 980px;
    margin: 0 auto;

  .title_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
  }

  .title {
    color: #e33d33;
    text-align: center;
    font-size: 3em;
    margin-right: .4em;
  }

  .title span {
    color: #333;
  }

  .card_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
  }
`;
/* harmony default export */ const styles_HomeStyled = (HomeStyled);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./styles/CardStyled.ts

const CardStyled = external_styled_components_default().div.withConfig({
    componentId: "sc-815804cc-0"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 1em;
  margin-bottom: 2em;
  width: 23%;
  border-radius: 1em;
  border: 2px solid #e33d33;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  background-color: #333;
  color: #fff;

  p {
    margin: 1em 0;
    background-color: #e33d33;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    text-transform: capitalize;
    margin-bottom: 1em;
    font-size: 1.4em;
  }

  a {
    text-decoration: none;
    background-color: #fff;
    color: #333;
    padding: .7em 1.2em;
    border-radius: 5px;
    font-weight: bold;
    transition: .4s;
  }

  a:hover {
    background-color: #e33d33;
    color: #fff;
  }
`;
/* harmony default export */ const styles_CardStyled = (CardStyled);

;// CONCATENATED MODULE: ./components/Card.tsx




function Card({ pokemon  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_CardStyled, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`,
                width: "120",
                height: "120",
                alt: pokemon.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "#",
                    pokemon.id
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: pokemon.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/pokemon/${pokemon.id}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: "Detalhes"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/index.tsx




const getStaticProps = async (context)=>{
    try {
        const maxPokemons = 251;
        const API = "https://pokeapi.co/api/v2/pokemon";
        const res = await fetch(`${API}/?limit=${maxPokemons}`);
        const data = await res.json();
        data.results.map((item, index)=>{
            item.id = index + 1;
        });
        return {
            props: {
                pokemons: data.results
            }
        };
    } catch (e) {
        console.error(e);
    }
};
function Home({ pokemons  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_HomeStyled, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "title_container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "title",
                        children: [
                            "Pok\xe9",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Next"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/images/pokeball.png",
                        width: "50",
                        height: "50",
                        alt: "pokeball"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "card_container",
                children: pokemons.map((pokemon)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                        pokemon: pokemon
                    }, pokemon.id)
                )
            })
        ]
    });
};


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
var __webpack_exports__ = __webpack_require__.X(0, [686,675,676,664], () => (__webpack_exec__(175)));
module.exports = __webpack_exports__;

})();