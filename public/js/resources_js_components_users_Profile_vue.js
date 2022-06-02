"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_users_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Profile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Profile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _code_OnePost_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../code/OnePost.vue */ "./resources/js/components/code/OnePost.vue");
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
    Post: _code_OnePost_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      posts: [],
      postsNumber: '',
      //Nav options
      optionMain: 'your_work',
      optionSecond: 'your_work',
      //followsUsers/Code
      followsDetails: []
    };
  },
  mounted: function mounted() {
    this.getAuthLikes();
    this.getPosts();
    if (this.$route.params.opmain) this.optionMain = this.$route.params.opmain;
    this.SET_OPMAIN(this.optionMain);
  },
  computed: {
    followers: function followers() {
      return this.$store.state.follows.followers.length;
    },
    followings: function followings() {
      return this.$store.state.follows.followings.length;
    }
  },
  methods: {
    getPosts: function getPosts() {
      var _this = this;

      axios.get('/api/post/posts/' + this.$store.state.auth.idUsu).then(function (res) {
        console.log(res.data.data);

        if (res.status) {
          _this.posts = res.data.data;
          _this.postsNumber = res.data.data.length;
        } else {
          _this.$router.push({
            name: 'permissError',
            params: {
              msg: res.data.error
            }
          });
        }
      })["catch"](function (err) {
        console.log("Error CodeProfile.vue getPosts");
        console.log(err);
      });
    },
    getAuthLikes: function getAuthLikes() {
      var _this2 = this;

      axios.get('/api/user/likesGiven').then(function (res) {
        _this2.likes = res.data.data;
      })["catch"](function (err) {
        console.log("Error CodeProfile.vue getAutLikes");
        console.log(err.data);
      });
    },
    //Followings
    getFollowings: function getFollowings() {
      var _this3 = this;

      axios.get('/api/user/follow/following/' + this.$store.state.auth.idUsu).then(function (res) {
        console.log(res);
        _this3.followsDetails = res.data.data;
      })["catch"](function (err) {
        console.log('Error en CodeProfile.vue getFollowings');
        console.log(err);
      });
    },
    //Followers
    getFollowers: function getFollowers() {
      var _this4 = this;

      axios.get('/api/user/follow/followers/' + this.$store.state.auth.idUsu).then(function (res) {
        _this4.followsDetails = res.data.data;
      })["catch"](function (err) {
        console.log('Error en CodeProfile.vue getFollowings');
        console.log(err);
      });
    },
    getPostFollowings: function getPostFollowings() {
      var _this5 = this;

      axios.get('/api/post/following').then(function (res) {
        console.log(res.data.data);
        _this5.followsDetails = res.data.data;
      })["catch"](function (err) {
        console.log('Error en Profile.vue getPostFollowers');
        console.log(err);
      });
    },
    getPostDeleted: function getPostDeleted() {
      var _this6 = this;

      axios.get('/api/post/deleted/' + this.$store.state.auth.idUsu).then(function (res) {
        console.log(res.data.data);
        _this6.posts = res.data.data;
      })["catch"](function (err) {
        console.log('Error en Profile.vue getPostFollowers');
        console.log(err);
      });
    },
    //SETTERS
    SET_OPMAIN: function SET_OPMAIN(id) {
      this.optionMain = id;

      switch (id) {
        case 'your_work':
          this.getPosts();
          break;

        case 'following':
          this.getPostFollowings();
          break;

        case 3:
          break;

        case 4:
          this.getFollowers();
          break;

        case 5:
          this.getFollowings();
          break;

        default:
          break;
      }
    },
    SET_OPSECOND: function SET_OPSECOND(id) {
      this.optionSecond = id;

      switch (id) {
        case 'components':
          break;

        case 3:
          this.getPostDeleted();
          break;

        default:
          break;
      }
    },
    deletePost: function deletePost(idPost) {
      var newPosts = this.posts.filter(function (p) {
        return p.idPost != idPost;
      });
      this.posts = newPosts;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/users/Profile.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/users/Profile.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_3cde2f47___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=3cde2f47& */ "./resources/js/components/users/Profile.vue?vue&type=template&id=3cde2f47&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/components/users/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_3cde2f47___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_3cde2f47___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/Profile.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/users/Profile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/Profile.vue?vue&type=template&id=3cde2f47&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/users/Profile.vue?vue&type=template&id=3cde2f47& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3cde2f47___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3cde2f47___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3cde2f47___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=3cde2f47& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Profile.vue?vue&type=template&id=3cde2f47&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Profile.vue?vue&type=template&id=3cde2f47&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/Profile.vue?vue&type=template&id=3cde2f47& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "profile" } }, [
    _c("div", { staticClass: "profile_header" }, [
      _c("h1", { staticClass: "profile_header-name" }, [
        _vm._v(_vm._s(this.$store.state.auth.name)),
      ]),
      _vm._v(" "),
      _c("img", {
        staticClass: "profile_header-img",
        attrs: { src: "/storage/" + this.$store.state.auth.img, alt: "" },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "profile_header-data" }, [
        _c("div", [
          _vm._v(
            _vm._s(_vm.$t("profile.components_count", { msg: _vm.postsNumber }))
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            on: {
              click: function ($event) {
                return _vm.SET_OPMAIN(4)
              },
            },
          },
          [
            _vm._v(
              _vm._s(_vm.$t("profile.followers_count", { msg: _vm.followers }))
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            on: {
              click: function ($event) {
                return _vm.SET_OPMAIN(5)
              },
            },
          },
          [
            _vm._v(
              _vm._s(_vm.$t("profile.following_count", { msg: _vm.followings }))
            ),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "profile_main" }, [
      _c("nav", { attrs: { id: "nav_profile" } }, [
        _c("ul", { staticClass: "nav_profile-main nav_profile-option" }, [
          _c(
            "li",
            {
              class: { active: _vm.optionMain == "your_work" },
              on: {
                click: function ($event) {
                  return _vm.SET_OPMAIN("your_work")
                },
              },
            },
            [_vm._v(_vm._s(_vm.$t("profile.your_work")))]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              class: { active: _vm.optionMain == "following" },
              on: {
                click: function ($event) {
                  return _vm.SET_OPMAIN("following")
                },
              },
            },
            [_vm._v(_vm._s(_vm.$t("profile.following")))]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              class: { active: _vm.optionMain == 3 },
              on: {
                click: function ($event) {
                  return _vm.SET_OPMAIN(3)
                },
              },
            },
            [_vm._v(_vm._s(_vm.$t("profile.trending")))]
          ),
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _vm.optionMain == "your_work"
          ? _c("ul", { staticClass: "nav_profile-work nav_profile-option" }, [
              _c(
                "li",
                {
                  class: { active: _vm.optionSecond == "your_work" },
                  on: {
                    click: function ($event) {
                      _vm.SET_OPMAIN("your_work"),
                        _vm.SET_OPSECOND("components")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("profile.components")))]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  class: { active: _vm.optionSecond == 2 },
                  on: {
                    click: function ($event) {
                      return _vm.SET_OPSECOND(2)
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("profile.collections")))]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  class: { active: _vm.optionSecond == 2 },
                  on: {
                    click: function ($event) {
                      _vm.SET_OPMAIN("your_work"), _vm.SET_OPSECOND("your_work")
                    },
                  },
                },
                [_vm._v("All posts")]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  class: { active: _vm.optionSecond == 2 },
                  on: {
                    click: function ($event) {
                      return _vm.SET_OPSECOND(2)
                    },
                  },
                },
                [_vm._v("Tags")]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  class: { active: _vm.optionSecond == 2 },
                  on: {
                    click: function ($event) {
                      return _vm.SET_OPSECOND(2)
                    },
                  },
                },
                [_vm._v("Loved")]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  class: { active: _vm.optionSecond == 3 },
                  on: {
                    click: function ($event) {
                      return _vm.SET_OPSECOND(3)
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("profile.delete")))]
              ),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _vm.optionMain == 4
        ? _c(
            "div",
            _vm._l(_vm.followsDetails, function (userFollower) {
              return _c("div", { key: userFollower.idUsu }, [
                _vm._v("\r\n      " + _vm._s(userFollower) + "\r\n        "),
                _c("img", {
                  attrs: { src: "/storage/" + userFollower.img, alt: "" },
                }),
                _vm._v(" "),
                _c("h3", [_vm._v(_vm._s(userFollower.name))]),
              ])
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.optionMain == 5
        ? _c(
            "div",
            _vm._l(_vm.followsDetails, function (user) {
              return _c("div", { key: user.idUsu }, [
                _c("img", { attrs: { src: "/storage/" + user.img, alt: "" } }),
                _vm._v(" "),
                _c("h3", [_vm._v(_vm._s(user.name))]),
              ])
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.optionMain == "your_work"
        ? _c(
            "div",
            { attrs: { id: "profile_posts" } },
            _vm._l(_vm.posts, function (post) {
              return _c("Post", {
                key: post.idPost,
                staticClass: "post",
                attrs: { data: post, likes: _vm.likes },
              })
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.optionMain == "your_work"
        ? _c(
            "div",
            { attrs: { id: "profile_posts" } },
            _vm._l(_vm.posts, function (post) {
              return _c("Post", {
                key: post.idPost,
                staticClass: "post",
                attrs: { data: post, likes: _vm.likes },
              })
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.optionMain == "following"
        ? _c(
            "div",
            { attrs: { id: "profile_posts" } },
            _vm._l(_vm.followsDetails, function (post) {
              return _c("Post", {
                key: post.idPost,
                staticClass: "post",
                attrs: { data: post, likes: _vm.likes },
              })
            }),
            1
          )
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);