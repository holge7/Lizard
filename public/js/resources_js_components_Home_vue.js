"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _code_OnePost_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code/OnePost.vue */ "./resources/js/components/code/OnePost.vue");
/* harmony import */ var _users_UserCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/UserCard.vue */ "./resources/js/components/users/UserCard.vue");
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
    Post: _code_OnePost_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserCard: _users_UserCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      posts: [],
      likes: [],
      limit: 7,
      offset: 0,
      interestingUsers: []
    };
  },
  mounted: function mounted() {
    if (this.$store.state.isAuthenticated) {
      this.getAuthLikes();
    }

    this.getPosts();
    this.getPeople();
  },
  computed: {
    beforeNull: function beforeNull() {
      return this.beforePosts.length;
    },
    actualNull: function actualNull() {
      return this.posts.length;
    },
    afterNull: function afterNull() {
      return this.afterPosts.length;
    }
  },
  methods: {
    getPosts: function getPosts() {
      var _this = this;

      this.afterPosts = [];
      this.posts = [];
      axios.get('/api/code/' + this.offset).then(function (res) {
        _this.posts = res.data.data;
      })["catch"](function (err) {});
    },
    getAuthLikes: function getAuthLikes() {
      var _this2 = this;

      axios.get('/api/user/likesGiven').then(function (res) {
        _this2.likes = res.data.data;
      })["catch"](function (err) {});
    },
    next: function next() {
      this.offset += 4;
      this.getPosts();
    },
    back: function back() {
      this.offset -= 4;
      this.getPosts();
    },
    getPeople: function getPeople() {
      var _this3 = this;

      axios.get('/api/user/random').then(function (res) {
        _this3.interestingUsers = res.data;
      })["catch"](function (err) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/UserCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/UserCard.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    user: {
      "default": ''
    }
  },
  methods: {
    follow: function follow() {
      var _this = this;

      var data = {
        idUsu: this.user.idUsu
      };
      axios.post('/api/user/follow/follow', data).then(function (res) {
        if (_this.$store.state.follows.followings.includes(_this.user.idUsu)) {
          //Change button
          var index = _this.$store.state.follows.followings.indexOf(_this.user.idUsu);

          _this.$store.state.follows.followings.splice(index, 1);
        } else {
          //Change button
          _this.$store.state.follows.followings.push(_this.user.idUsu);
        }
      })["catch"](function (err) {});
    },
    showUser: function showUser() {
      this.$router.push({
        name: 'code-others',
        params: {
          idUsu: this.user.idUsu
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/UserCard.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/users/UserCard.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserCard_vue_vue_type_template_id_2b5d0866___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserCard.vue?vue&type=template&id=2b5d0866& */ "./resources/js/components/users/UserCard.vue?vue&type=template&id=2b5d0866&");
/* harmony import */ var _UserCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCard.vue?vue&type=script&lang=js& */ "./resources/js/components/users/UserCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserCard_vue_vue_type_template_id_2b5d0866___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserCard_vue_vue_type_template_id_2b5d0866___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/UserCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/UserCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/users/UserCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/UserCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");


/***/ }),

/***/ "./resources/js/components/users/UserCard.vue?vue&type=template&id=2b5d0866&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/users/UserCard.vue?vue&type=template&id=2b5d0866& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_template_id_2b5d0866___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_template_id_2b5d0866___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_template_id_2b5d0866___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserCard.vue?vue&type=template&id=2b5d0866& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/UserCard.vue?vue&type=template&id=2b5d0866&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "home" } }, [
    _c("div", { attrs: { id: "post-wrapper" } }, [
      _c("h1", { staticClass: "title" }, [
        _vm._v(_vm._s(_vm.$t("home.top_comopnents")) + " "),
        _c("hr"),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "posts" } },
        [
          _c(
            "button",
            { staticClass: "button-post_next", on: { click: _vm.next } },
            [_c("i", { staticClass: "bi bi-arrow-bar-right" })]
          ),
          _vm._v(" "),
          _vm.offset >= 4
            ? _c(
                "button",
                {
                  staticClass: "button-post_next post_back",
                  on: { click: _vm.back },
                },
                [_c("i", { staticClass: "bi bi-arrow-bar-left" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.posts, function (post) {
            return _c("Post", {
              key: post.idPost,
              staticClass: "post",
              attrs: { data: post, likes: _vm.likes },
            })
          }),
          _vm._v(" "),
          !_vm.actualNull
            ? _c("Post", { staticClass: "post", attrs: { likes: [0] } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.actualNull
            ? _c("Post", { staticClass: "post", attrs: { likes: [0] } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.actualNull
            ? _c("Post", { staticClass: "post", attrs: { likes: [0] } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.actualNull
            ? _c("Post", { staticClass: "post", attrs: { likes: [0] } })
            : _vm._e(),
        ],
        2
      ),
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "users_wrapper" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "users" } },
        _vm._l(_vm.interestingUsers, function (user) {
          return _c("User-Card", {
            key: user.idUsu,
            staticClass: "user",
            attrs: { user: user },
          })
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "svg",
        {
          attrs: {
            id: "wave",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1440 320",
          },
        },
        [
          _c("path", {
            attrs: {
              fill: "#1b1b1d",
              "fill-opacity": "1",
              d: "M0,32L10.9,32C21.8,32,44,32,65,48C87.3,64,109,96,131,101.3C152.7,107,175,85,196,96C218.2,107,240,149,262,154.7C283.6,160,305,128,327,133.3C349.1,139,371,181,393,197.3C414.5,213,436,203,458,202.7C480,203,502,213,524,234.7C545.5,256,567,288,589,277.3C610.9,267,633,213,655,202.7C676.4,192,698,224,720,234.7C741.8,245,764,235,785,224C807.3,213,829,203,851,186.7C872.7,171,895,149,916,128C938.2,107,960,85,982,64C1003.6,43,1025,21,1047,16C1069.1,11,1091,21,1113,48C1134.5,75,1156,117,1178,122.7C1200,128,1222,96,1244,90.7C1265.5,85,1287,107,1309,138.7C1330.9,171,1353,213,1375,229.3C1396.4,245,1418,235,1429,229.3L1440,224L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
            },
          }),
        ]
      ),
    ]),
    _vm._v(" "),
    _vm._m(1),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "users-title" } }, [
      _c("h1", { staticClass: "title" }, [
        _vm._v("Interesting People "),
        _c("hr"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { attrs: { id: "footer_wrapper" } }, [
      _c("br"),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c("h3", [_vm._v("Lizard®")]),
      _vm._v(" "),
      _c("div", { attrs: { id: "footer_wrapper-data" } }, [
        _c("p", [
          _c("b", [_vm._v("GitHub:")]),
          _vm._v(" "),
          _c("a", { attrs: { href: "https://github.com/holge7/Lizard" } }, [
            _vm._v("https://github.com/holge7/Lizard"),
          ]),
        ]),
        _vm._v(" "),
        _c("p", [_c("b", [_vm._v("Sponsors:")]), _vm._v(" Holge")]),
        _vm._v(" "),
        _c("p", [_c("b", [_vm._v("Based in:")]), _vm._v(" CodePen - GitHub")]),
        _vm._v(" "),
        _c("p", [_c("b", [_vm._v("Version: ")]), _vm._v(" 1.0")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/UserCard.vue?vue&type=template&id=2b5d0866&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/UserCard.vue?vue&type=template&id=2b5d0866& ***!
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
  return _c("div", [
    _c("div", { staticClass: "user_card-wrapper" }, [
      _c("img", {
        staticClass: "user_card-img",
        attrs: { src: "/storage/" + _vm.user.img, alt: "" },
        on: { click: _vm.showUser },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "user_card-details" }, [
        _c(
          "div",
          { staticClass: "user_card-name", on: { click: _vm.showUser } },
          [_vm._v(_vm._s(_vm.user.name))]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "user_card-posts" }, [
          _vm._v("Posts: " + _vm._s(_vm.user.posts)),
        ]),
      ]),
      _vm._v(" "),
      this.$store.state.follows.followings.includes(_vm.user.idUsu)
        ? _c(
            "button",
            { staticClass: "button-Unfollow", on: { click: _vm.follow } },
            [_c("i", { staticClass: "bi bi-person-dash-fill" })]
          )
        : _c(
            "button",
            { staticClass: "button-follow", on: { click: _vm.follow } },
            [_c("i", { staticClass: "bi bi-person-plus-fill" })]
          ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);