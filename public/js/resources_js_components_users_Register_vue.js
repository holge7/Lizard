"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_users_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        img: ''
      },
      imagepreview: '',
      errors: []
    };
  },
  methods: {
    //Img preview
    imgSelected: function imgSelected(e) {
      var _this = this;

      this.form.img = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.form.img);

      reader.onload = function (e) {
        _this.imagepreview = e.target.result;
      };
    },
    saveForm: function saveForm() {
      var _this2 = this;

      var data = new FormData();
      data.append('name', this.form.name);
      data.append('email', this.form.email);
      data.append('password', this.form.password);
      data.append('img', this.form.img);
      axios.post('/api/users', data).then(function (req) {
        _this2.$router.push({
          name: "login"
        });
      })["catch"](function (error) {//this.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/users/Register.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/users/Register.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_9a6a4e16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=9a6a4e16& */ "./resources/js/components/users/Register.vue?vue&type=template&id=9a6a4e16&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/users/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_9a6a4e16___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_9a6a4e16___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/Register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/users/Register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/Register.vue?vue&type=template&id=9a6a4e16&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/users/Register.vue?vue&type=template&id=9a6a4e16& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_9a6a4e16___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_9a6a4e16___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_9a6a4e16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=9a6a4e16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Register.vue?vue&type=template&id=9a6a4e16&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Register.vue?vue&type=template&id=9a6a4e16&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Register.vue?vue&type=template&id=9a6a4e16& ***!
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
  return _c("div", { staticClass: "form" }, [
    _c("div", { staticClass: "form-container" }, [
      _c("h1", [_vm._v(_vm._s(_vm.$t("log.register")))]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { "max-height": "100px" },
        attrs: { src: _vm.imagepreview, alt: "" },
      }),
      _vm._v(" "),
      _c(
        "form",
        { attrs: { method: "POST", enctype: "multipart/form-data" } },
        [
          _vm.errors.name
            ? _c("span", { staticStyle: { color: "red" } }, [
                _vm._v(_vm._s(_vm.errors.name)),
                _c("br"),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.name,
                expression: "form.name",
              },
            ],
            staticClass: "input-data",
            attrs: {
              type: "text",
              name: "name",
              placeholder: _vm.$t("log.holder_name"),
              required: "",
              autofocus: "",
            },
            domProps: { value: _vm.form.name },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "name", $event.target.value)
              },
            },
          }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm.errors.email
            ? _c("span", { staticStyle: { color: "red" } }, [
                _vm._v(_vm._s(_vm.errors.email)),
                _c("br"),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.email,
                expression: "form.email",
              },
            ],
            staticClass: "input-data",
            attrs: {
              type: "email",
              name: "email",
              placeholder: _vm.$t("log.holder_email"),
              required: "",
              autocomplete: "email",
            },
            domProps: { value: _vm.form.email },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "email", $event.target.value)
              },
            },
          }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm.errors.password
            ? _c("span", { staticStyle: { color: "red" } }, [
                _vm._v(_vm._s(_vm.errors.password)),
                _c("br"),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.password,
                expression: "form.password",
              },
            ],
            staticClass: "input-data",
            attrs: {
              type: "password",
              name: "password",
              placeholder: _vm.$t("log.holder_pass"),
            },
            domProps: { value: _vm.form.password },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "password", $event.target.value)
              },
            },
          }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm.errors.password_confirmation
            ? _c("span", { staticStyle: { color: "red" } }, [
                _vm._v(_vm._s(_vm.errors.password_confirmation)),
                _c("br"),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.password_confirmation,
                expression: "form.password_confirmation",
              },
            ],
            staticClass: "input-data",
            attrs: {
              type: "password",
              name: "password_confirmation",
              placeholder: _vm.$t("log.holder_confirm_pas"),
            },
            domProps: { value: _vm.form.password_confirmation },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "password_confirmation", $event.target.value)
              },
            },
          }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("input", {
            staticClass: "input-data",
            attrs: { placeholder: "img", type: "file", name: "img" },
            on: { change: _vm.imgSelected },
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "input-submit",
              attrs: { type: "submit" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.saveForm.apply(null, arguments)
                },
              },
            },
            [_vm._v(_vm._s(_vm.$t("log.register")))]
          ),
        ]
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "form-or" }, [
        _c("hr"),
        _vm._v(" "),
        _c("span", { staticClass: "or" }, [_vm._v(_vm._s(_vm.$t("log.or")))]),
        _vm._v(" "),
        _c("hr"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "form-info" }, [
        _c("i", [_vm._v(_vm._s(_vm.$t("log.have_account")) + " ")]),
        _c("br"),
        _c(
          "b",
          [
            _c(
              "router-link",
              { staticClass: "nav-link", attrs: { to: { name: "login" } } },
              [_vm._v(_vm._s(_vm.$t("log.login_now")))]
            ),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);