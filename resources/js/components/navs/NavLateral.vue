<template>
  <div>
    <div id="menu">
        <ul id="menu_options">

            <!-- Options -->
            <div>
              <ul id="nav-logo">
                  <router-link class="button" :to="{name:'home'}" id="nav_logo-home">
                      <img :src="'/storage/logo.svg'" id="logo" alt="">
                      <h2 id="logo-title">Lizard</h2>
                  </router-link>
              </ul>
              <div class="menu_options-stack menu_option-center">
                <router-link :to="{name:'create-code'}" class="create_post-button menu_options-option menu_options-create">
                  <i class="bi bi-postage"></i> {{$t('nav.createPost')}}
                </router-link>
              </div>
              <div class="menu_options-stack">
                <li class="menu_options-option"><router-link :to="{name:'my-code'}">{{$t('nav.yourWork')}}</router-link></li>
                <li class="menu_options-option"><router-link :to="{name:'my-code', params: { opmain: 'following' }}">{{$t('nav.following')}}</router-link></li>
              </div>
              <div class="menu_options-stack">
                <h3>{{$t('nav.actualStack')}}</h3>
                <div class="stacks">
                  <img v-for="name in frameworksName" :key="name" :src="`/storage/codeIcons/`+name+`.png`" width="30px" alt="">
                </div>
              </div>
            </div>

            <!-- Featured post -->
            <div>
              <div class="menu_options-stack">
                <h3 class="menu_options-title">{{$t('nav.featured')}}</h3>
                <p>{{featuredPost.namePost}}</p>
                <div id="menu_options-container-featured">
                  <div>
                    <p>{{$t('nav.like')}} {{featuredPost.likes}}</p>
                  </div>
                  <iframe id="menu_options-featured" :srcdoc="srcdoc" frameborder="0"></iframe>
                  <p>{{$t('nav.by')}} {{featuredPost.name}}</p>
                </div>
              </div>
            </div>
        </ul>
    </div>
  </div>
</template>

<script>
import Post from './../code/OnePost.vue';
export default {
  components:{
    Post,
  },
  data() {
    return {
      featuredPost:{},
      frameworksName:["BOOTSTRAP", "CSS", "HTML", "JQUERY", "JS", "TAILWIND"]
    }
  },
  computed:{
    srcdoc(){
      let src = `<html>
                ${this.featuredPost.script}
                <body>${this.featuredPost.html}</body>
                <style>${this.featuredPost.css}body{transform:scale(.4);transform-origin:0 0;overflow:hidden;}</style>
            </html>`;
      return src;
    }
  },
  mounted(){
    this.getPostFeatured();
  },
  methods:{
    getPostFeatured(){
      axios.get('/api/getPostFeatured')
      .then(res => {
        this.featuredPost = res.data.data[0];
      })
      .catch(err => {
      })
    }
  }
}
</script>

<style>

</style>