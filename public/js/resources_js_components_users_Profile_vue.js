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
/* harmony import */ var _UserCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCard.vue */ "./resources/js/components/users/UserCard.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Post: _code_OnePost_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserCard: _UserCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      posts: [],
      postsNumber: '',
      //Nav options
      optionMain: 'your_work',
      optionSecond: 'profile',
      //followsUsers/Code
      followsDetails: [],
      likes: [],
      tags: [],
      searchTags: [],
      nameTagSearch: '',
      limit: 0,
      work: [],
      statistics: {
        views: 0,
        likes: 0,
        followers: 0,
        post: Array
      }
    };
  },
  mounted: function mounted() {
    this.getWork();
    this.getAuthLikes();

    if (this.$route.params.opmain) {
      this.optionMain = this.$route.params.opmain;
      this.optionSecond = "none";
    }

    this.SET_OPMAIN(this.optionMain);
  },
  computed: {
    followers: function followers() {
      return this.$store.state.follows.followers.length;
    },
    followings: function followings() {
      return this.$store.state.follows.followings.length;
    },
    dayWorkl: function dayWorkl(day) {
      var _iterator = _createForOfIteratorHelper(this.work),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;

          if (i.day == day) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  },
  methods: {
    dayWork: function dayWork(day) {
      var _iterator2 = _createForOfIteratorHelper(this.work),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var i = _step2.value;

          if (i.day == day) {
            return true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return false;
    },
    getPosts: function getPosts() {
      var _this = this;

      axios.get('/api/post/posts/' + this.$store.state.auth.idUsu + '/' + this.limit).then(function (res) {
        if (res.status) {
          res.data.data.map(function (p) {
            return _this.posts.push(p);
          });
          _this.postsNumber = res.data.data.length;
        } else {
          _this.$router.push({
            name: 'permissError',
            params: {
              msg: res.data.error
            }
          });
        }
      })["catch"](function (err) {});
    },
    getResume: function getResume() {
      var _this2 = this;

      axios.get('/api/post/posts/' + this.$store.state.auth.idUsu).then(function (res) {
        if (res.status) {
          _this2.posts = res.data.data;
          _this2.postsNumber = res.data.data.length;
        } else {
          _this2.$router.push({
            name: 'permissError',
            params: {
              msg: res.data.error
            }
          });
        }
      })["catch"](function (err) {});
    },
    getAuthLikes: function getAuthLikes() {
      var _this3 = this;

      axios.get('/api/user/likesGiven').then(function (res) {
        _this3.likes = res.data.data;
      })["catch"](function (err) {});
    },
    //Followings
    getFollowings: function getFollowings() {
      var _this4 = this;

      axios.get('/api/user/follow/following/' + this.$store.state.auth.idUsu).then(function (res) {
        _this4.followsDetails = res.data.data;
      })["catch"](function (err) {});
    },
    //Followers
    getFollowers: function getFollowers() {
      var _this5 = this;

      axios.get('/api/user/follow/followers/' + this.$store.state.auth.idUsu).then(function (res) {
        _this5.followsDetails = res.data.data;
      })["catch"](function (err) {});
    },
    getPostFollowings: function getPostFollowings() {
      var _this6 = this;

      axios.get('/api/post/following/' + this.limit).then(function (res) {
        res.data.data.map(function (p) {
          return _this6.posts.push(p);
        });
      })["catch"](function (err) {});
    },
    getPostDeleted: function getPostDeleted() {
      var _this7 = this;

      axios.get('/api/post/deleted/' + this.$store.state.auth.idUsu).then(function (res) {
        _this7.posts = res.data.data;
      })["catch"](function (err) {});
    },
    getTags: function getTags() {
      var _this8 = this;

      axios.get('/api/tag/own/').then(function (res) {
        _this8.tags = res.data;
      })["catch"](function (err) {});
    },
    searchTag: function searchTag(idTag, nameTag) {
      var _this9 = this;

      axios.get('/api/tag/getOwnPostByTag/' + idTag).then(function (res) {
        _this9.posts = res.data;
        _this9.nameTagSearch = nameTag;
      })["catch"](function (err) {});
    },
    getPostLoved: function getPostLoved() {
      var _this10 = this;

      axios.get('/api/post/getLastPostLoved').then(function (res) {
        _this10.posts = res.data;
      })["catch"](function (err) {});
    },
    getWork: function getWork() {
      var _this11 = this;

      //Month work
      axios.get('/api/user/getWork').then(function (res) {
        _this11.work = res.data;
      })["catch"](function (err) {}); //Statics

      axios.get('/api/post/statistics').then(function (res) {
        _this11.statistics = res.data;
      });
    },
    //SETTERS
    SET_OPMAIN: function SET_OPMAIN(id) {
      this.optionMain = id;
      this.posts = [];

      switch (id) {
        case 'your_work':
          this.getPosts();
          break;

        case 'following':
          this.getPostFollowings();
          break;

        case 'profile':
          this.getResume();
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
      this.posts = [];
      this.limit = 0;

      switch (id) {
        case 'profile':
          this.getWork();
          break;

        case 'tags':
          this.getTags();
          break;

        case 'deleted':
          this.getPostDeleted();
          break;

        case 'loved':
          this.getPostLoved();
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
    },
    load: function load() {
      this.limit += 6;
      this.getPosts();
    },
    loadFollowing: function loadFollowing() {
      this.limit += 6;
      this.getPostFollowings();
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
        _c(
          "div",
          {
            staticClass: "follows-button",
            on: {
              click: function ($event) {
                _vm.SET_OPMAIN(4), _vm.SET_OPSECOND("none")
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
            staticClass: "follows-button",
            on: {
              click: function ($event) {
                _vm.SET_OPMAIN(5), _vm.SET_OPSECOND("none")
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
                  _vm.SET_OPMAIN("your_work"), _vm.SET_OPSECOND("profile")
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
                  _vm.SET_OPMAIN("following"), _vm.SET_OPSECOND("none")
                },
              },
            },
            [_vm._v(_vm._s(_vm.$t("profile.following")))]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              class: { active: _vm.optionMain == 4 || _vm.optionMain == 5 },
              on: {
                click: function ($event) {
                  _vm.SET_OPMAIN(5), _vm.SET_OPSECOND("none")
                },
              },
            },
            [_vm._v(_vm._s(_vm.$t("profile.friends")))]
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
                  class: { active: _vm.optionSecond == "profile" },
                  on: {
                    click: function ($event) {
                      _vm.SET_OPMAIN("your_work"), _vm.SET_OPSECOND("profile")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("profile.profile")))]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  class: { active: _vm.optionSecond == "all" },
                  on: {
                    click: function ($event) {
                      _vm.SET_OPMAIN("your_work"), _vm.SET_OPSECOND("all")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("profile.allPosts")))]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  class: { active: _vm.optionSecond == "tags" },
                  on: {
                    click: function ($event) {
                      _vm.SET_OPSECOND(2), _vm.SET_OPSECOND("tags")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("profile.tags")))]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  class: { active: _vm.optionSecond == "loved" },
                  on: {
                    click: function ($event) {
                      _vm.SET_OPSECOND(2), _vm.SET_OPSECOND("loved")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("profile.loved")))]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  class: { active: _vm.optionSecond == "deleted" },
                  on: {
                    click: function ($event) {
                      _vm.SET_OPSECOND("your_work"), _vm.SET_OPSECOND("deleted")
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
            { staticClass: "profile_main-follows" },
            [
              _vm._l(_vm.followsDetails, function (user) {
                return _c("User-Card", {
                  key: user.idUsu,
                  staticClass: "user",
                  attrs: { user: user },
                })
              }),
              _vm._v(" "),
              _vm.followsDetails[0] == null
                ? _c("div", { staticClass: "profile_follows-msg" }, [
                    _c("h3", [_vm._v(_vm._s(_vm.$t("profile.dontFollow")))]),
                  ])
                : _vm._e(),
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.optionMain == 5
        ? _c(
            "div",
            { staticClass: "profile_main-follows" },
            _vm._l(_vm.followsDetails, function (user) {
              return _c("User-Card", {
                key: user.idUsu,
                staticClass: "user",
                attrs: { user: user },
              })
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.optionSecond == "profile"
        ? _c("div", { attrs: { id: "profile_resume" } }, [
            _c("div", { attrs: { id: "profile_resume-month" } }, [
              _c("h2", [_vm._v(_vm._s(_vm.$t("profile.thisMonth")))]),
              _vm._v(" "),
              _c(
                "table",
                { attrs: { id: "month_table" } },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._l(4, function (semana) {
                    return _c(
                      "tr",
                      _vm._l(7, function (dia) {
                        return _c("td", {
                          class: {
                            "month_table-work": _vm.dayWork(
                              semana * 7 + dia - 7
                            ),
                          },
                        })
                      }),
                      0
                    )
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _c("div", { attrs: { id: "profile_resume-statics" } }, [
              _c("h2", [_vm._v(_vm._s(_vm.$t("profile.statistics")))]),
              _vm._v(" "),
              _c("div", { attrs: { id: "statics-container" } }, [
                _c("div", { staticClass: "static" }, [
                  _c("p", [_vm._v(_vm._s(_vm.$t("profile.views")))]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.statistics.views))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "static" }, [
                  _c("p", [_vm._v(_vm._s(_vm.$t("profile.likes")))]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.statistics.likes))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "static" }, [
                  _c("p", [_vm._v(_vm._s(_vm.$t("profile.follows")))]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.statistics.followers))]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "resume-container resume-container-best" },
              [
                _c("h1", { staticClass: "profile_resume-title" }, [
                  _vm._v(_vm._s(_vm.$t("profile.bestPost"))),
                ]),
                _vm._v(" "),
                _c("Post", {
                  staticClass: "post",
                  attrs: { data: _vm.statistics.post[0], likes: _vm.likes },
                }),
              ],
              1
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.optionSecond == "deleted"
        ? _c(
            "div",
            { attrs: { id: "profile_tags" } },
            [
              _c("h2", [
                _vm._v(_vm._s(_vm.$t("profile.delete")) + " "),
                _c("i", { staticClass: "bi bi-trash-fill" }),
              ]),
              _vm._v(" "),
              _vm._l(_vm.posts, function (post) {
                return _c("Post", {
                  key: post.idPost,
                  staticClass: "post",
                  attrs: { data: post, likes: _vm.likes },
                })
              }),
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.optionSecond == "all"
        ? _c(
            "div",
            { attrs: { id: "profile_tags" } },
            [
              _c("h2", [_vm._v(_vm._s(_vm.$t("profile.allYourPosts")))]),
              _vm._v(" "),
              _vm._l(_vm.posts, function (post) {
                return _c("Post", {
                  key: post.idPost,
                  staticClass: "post",
                  attrs: { data: post, likes: _vm.likes },
                })
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "profile_load button-load",
                  on: {
                    click: function ($event) {
                      return _vm.load()
                    },
                  },
                },
                [_vm._v("Load")]
              ),
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.optionSecond == "loved"
        ? _c(
            "div",
            { attrs: { id: "profile_tags" } },
            [
              _c("h2", [_vm._v(_vm._s(_vm.$t("profile.lastLoveds")) + '"<3"')]),
              _vm._v(" "),
              _vm._l(_vm.posts, function (post) {
                return _c("Post", {
                  key: post.idPost,
                  staticClass: "post",
                  attrs: { data: post, likes: _vm.likes },
                })
              }),
              _vm._v(" "),
              _vm.posts[0] == null
                ? _c("div", { staticClass: "profile_tags-msg" }, [
                    _c("h3", [
                      _vm._v(_vm._s(_vm.$t("profile.yourDontLove")) + " </3"),
                    ]),
                  ])
                : _vm._e(),
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.optionSecond == "tags"
        ? _c(
            "div",
            { attrs: { id: "profile_tags" } },
            [
              _c("br"),
              _vm._v(" "),
              _c("h2", [
                _vm._v(_vm._s(_vm.$t("profile.allTags")) + " "),
                _c("hr"),
              ]),
              _vm._v(" "),
              _c(
                "ul",
                { attrs: { id: "tags" } },
                _vm._l(_vm.tags, function (tag) {
                  return _c(
                    "li",
                    {
                      staticClass: "button-tag tag",
                      on: {
                        click: function ($event) {
                          return _vm.searchTag(tag.idTag, tag.tag)
                        },
                      },
                    },
                    [_vm._v(_vm._s(tag.tag))]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c("h3", { staticClass: "profile_tags-title" }, [
                _vm._v(_vm._s(_vm.nameTagSearch)),
              ]),
              _vm._v(" "),
              _vm._l(_vm.posts, function (post) {
                return _c("Post", {
                  key: post.idPost,
                  staticClass: "post",
                  attrs: { data: post, likes: _vm.likes },
                })
              }),
              _vm._v(" "),
              _vm.nameTagSearch == ""
                ? _c("div", { staticClass: "profile_tags-msg" }, [
                    _c("h1", [_vm._v(_vm._s(_vm.$t("profile.selectTag")))]),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.posts[0] == null && _vm.nameTagSearch != ""
                ? _c("div", { staticClass: "profile_tags-msg" }, [
                    _c("h3", [
                      _vm._v(_vm._s(_vm.$t("profile.youDontHavePost"))),
                    ]),
                  ])
                : _vm._e(),
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.optionMain == "following"
        ? _c(
            "div",
            { attrs: { id: "profile_tags" } },
            [
              _vm._l(_vm.posts, function (post) {
                return _c("Post", {
                  key: post.idPost,
                  staticClass: "post",
                  attrs: { data: post, likes: _vm.likes },
                })
              }),
              _vm._v(" "),
              _vm.posts[0] == null
                ? _c("div", { staticClass: "profile_tags-msg" }, [
                    _c("h3", [
                      _vm._v(_vm._s(_vm.$t("profile.haveYouFriends"))),
                    ]),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "profile_load button-load",
                  on: {
                    click: function ($event) {
                      return _vm.loadFollowing()
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("profile.load")))]
              ),
            ],
            2
          )
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Lu")]),
      _vm._v(" "),
      _c("th", [_vm._v("Ma")]),
      _vm._v(" "),
      _c("th", [_vm._v("Mi")]),
      _vm._v(" "),
      _c("th", [_vm._v("Ju")]),
      _vm._v(" "),
      _c("th", [_vm._v("Vi")]),
      _vm._v(" "),
      _c("th", [_vm._v("Sa")]),
      _vm._v(" "),
      _c("th", [_vm._v("Do")]),
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