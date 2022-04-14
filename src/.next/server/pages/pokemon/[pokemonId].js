"use strict";
(() => {
var exports = {};
exports.id = 643;
exports.ids = [643];
exports.modules = {

/***/ 395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Pokemon),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
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
;// CONCATENATED MODULE: ./styles/PokemonStyled.ts

const PokemonStyled = external_styled_components_default().div.withConfig({
    componentId: "sc-9d43db2a-0"
})`
  text-align: center;

  h1 {
    font-size: 2.5em;
    text-transform: capitalize;
    background-color: #333;
    color: #fff;
    padding: .3em;
    margin: .8em auto;
    width: 300px;
  }

  h3 {
    margin: .6em auto;
    font-size: 1.2em;
  }

  .types_container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .type {
    padding: 0.6em 1em;
    color: #fff;
    background-color: #000;
    margin-right: .5em;
    border: 1px solid #ccc;
    border-radius: 6px;
    text-transform: uppercase;
    font-size: .8em;
  }

  .type_normal {
  background-color: #aa9;
  }

  .type_fire {
    background-color: #f42;
  }

  .type_water {
    background-color: #39f;
  }

  .type_eletric {
    background-color: #fc3;
  }

  .type_grass {
    background-color: #7c5;
  }

  .type_ice {
    background-color: #6cf;
  }

  .type_fighting {
    background-color: #b54;
  }

  .type_poison {
    background-color: #a59;
  }

  .type_ground {
    background-color: #db5;
  }

  .type_flying {
    background-color: #89f;
  }

  .type_psychic {
    background-color: #f59;
  }

  .type_bug {
    background-color: #ab2;
  }

  .type_rock {
    background-color: #ba6;
  }

  .type_ghost {
    background-color: #66b;
  }

  .type_dragon {
    background-color: #76e;
  }

  .type_dark {
    background-color: #754;
  }

  .type_steel {
    background-color: #aab;
  }

  .type_fairy {
    background-color: #e9e;
  }

  .data_container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .5em;
  }

  .data_container div {
    margin: 1em 0;
    padding: 0 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .data_height {
    border-right: 1px solid #ccc;
  }
`;
/* harmony default export */ const styles_PokemonStyled = (PokemonStyled);

;// CONCATENATED MODULE: ./pages/pokemon/[pokemonId].tsx



const getStaticPaths = async ()=>{
    try {
        const maxPokemons = 251;
        const API = "https://pokeapi.co/api/v2/pokemon";
        const res = await fetch(`${API}/?limit=${maxPokemons}`);
        const data = await res.json();
        const paths = data.results.map((_pokemon, index)=>{
            return {
                params: {
                    pokemonId: (index + 1).toString()
                }
            };
        });
        return {
            paths,
            fallback: false
        };
    } catch (e) {
        console.error(e);
    }
};
const getStaticProps = async (context)=>{
    try {
        const id = context.params.pokemonId;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        return {
            props: {
                pokemon: data
            }
        };
    } catch (e) {
        console.log(e);
    }
};
function Pokemon({ pokemon  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_PokemonStyled, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: pokemon.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`,
                width: "200",
                height: "200",
                alt: pokemon.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "N\xfamero:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "#",
                            pokemon.id
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Tipo:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "types_container",
                        children: pokemon.types.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `type ${[
                                    "type_" + item.type.name
                                ]}`,
                                children: item.type.name
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "data_container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "data_height",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Altura:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    pokemon.height * 10,
                                    " cm"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "data_weight",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Peso:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    pokemon.weight / 10,
                                    " Kg"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675], () => (__webpack_exec__(395)));
module.exports = __webpack_exports__;

})();