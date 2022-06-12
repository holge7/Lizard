"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_users_Settings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Settings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navs_LangSwitch_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../navs/LangSwitch.vue */ "./resources/js/components/navs/LangSwitch.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    LangSwitch: _navs_LangSwitch_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      user: {},
      imagepreview: null
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    imgSelected: function imgSelected(e) {
      var _this = this;

      this.imagepreview = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.imagepreview);

      reader.onload = function (e) {
        _this.imagepreview = e.target.result;
      };
    },
    getData: function getData() {
      var _this2 = this;

      axios.get('/api/user/authData').then(function (res) {
        _this2.user = res.data;
      })["catch"](function (err) {
        if (err.response.status == 403) {
          _this2.$router.push({
            name: 'permissError'
          });
        }
      });
    },
    saveNormal: function saveNormal() {
      var _this3 = this;

      var data = new FormData();
      data.append('name', this.user.name);
      data.append('img', this.user.img);
      axios.put('api/user/users/' + this.$store.state.auth.idUsu, data).then(function (req) {
        _this3.$router.push({
          name: "home"
        });
      })["catch"](function (error) {
        //this.errors = error.response.data.errors;
        console.log("Error desde saveFrom de Register.vue");
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/users/Settings.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/users/Settings.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings_vue_vue_type_template_id_386ea675___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=386ea675& */ "./resources/js/components/users/Settings.vue?vue&type=template&id=386ea675&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/users/Settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_386ea675___WEBPACK_IMPORTED_MODULE_0__.render,
  _Settings_vue_vue_type_template_id_386ea675___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/Settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/Settings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/users/Settings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/Settings.vue?vue&type=template&id=386ea675&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/users/Settings.vue?vue&type=template&id=386ea675& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_386ea675___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_386ea675___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_386ea675___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=template&id=386ea675& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Settings.vue?vue&type=template&id=386ea675&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Settings.vue?vue&type=template&id=386ea675&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Settings.vue?vue&type=template&id=386ea675& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "setting-wrapper" } }, [
    _c("h1", { staticClass: "settings-title" }, [_vm._v("Settings Profile")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-normal", attrs: { id: "settings-options" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "option" }, [
          _c("p", [_vm._v("Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user.name,
                expression: "user.name",
              },
            ],
            staticClass: "input-data",
            attrs: {
              type: "text",
              name: "name",
              placeholder: _vm.$t("log.holder_name"),
            },
            domProps: { value: _vm.user.name },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.user, "name", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "option" }, [
          _c("p", [_vm._v("Avatar")]),
          _vm._v(" "),
          _vm.imagepreview == null
            ? _c("img", {
                staticClass: "option-img",
                attrs: { src: "/storage/" + _vm.user.img, alt: "" },
              })
            : _c("img", {
                staticClass: "option-img",
                attrs: { src: _vm.imagepreview, alt: "" },
              }),
          _vm._v(" "),
          _c("label", { attrs: { for: "img" } }, [_vm._v("New avatar")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "input-data",
            staticStyle: { visibility: "hidden" },
            attrs: { id: "img", placeholder: "img", type: "file", name: "img" },
            on: { change: _vm.imgSelected },
          }),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "option" },
          [
            _c("p", [_vm._v("Lang")]),
            _vm._v(" "),
            _c("LangSwitch", { attrs: { id: "lang_switch" } }),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "option" }, [
          _c(
            "button",
            {
              staticClass: "button save-button",
              on: { click: _vm.saveNormal },
            },
            [_vm._v("Save")]
          ),
        ]),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-danger", attrs: { id: "settings-options" } },
      [
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "option" }, [
          _c("p", [_vm._v("Password: ")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "input-data",
            attrs: {
              type: "password",
              name: "password",
              placeholder: _vm.$t("log.holder_pass"),
            },
          }),
          _vm._v(" "),
          _c("input", {
            staticClass: "input-data",
            attrs: {
              type: "password",
              name: "password",
              placeholder: _vm.$t("log.holder_pass"),
            },
          }),
        ]),
        _vm._v(" "),
        _vm._m(3),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "option nor-zone" }, [
      _c("h2", [_vm._v("Normal zone")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "option dan-zone" }, [
      _c("h2", [_vm._v("Dangerous zone")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info" }, [
      _c("p", [
        _vm._v(
          "⚠ To change your password you must write your old password and the new one twice, notice, once it is changed, the change cannot be reversed ⚠"
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "option" }, [
      _c("button", { staticClass: "button" }, [
        _c("h3", [_vm._v("Drop Account")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);