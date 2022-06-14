<template>
<div>
  <div id="seach_wrapper">
    <div id="posts">
    <h1 class="title">{{$t('search.resultMsg')}} '<i>{{$route.params.name}}</i>'</h1>
      <div id="post_search">
        <Post 
          v-for="post in posts" :key="post.idPost"
            :data="post"
            :likes="likes"
            class="post" 
        ></Post>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Post from './code/OnePost.vue';
export default {
  components:{
    Post
  },
    data() {
    return {
      posts: '',
      likes: [],
    }
  },
  mounted() {
    if (this.$route.params.route==undefined) {
      this.$router.push({name:'home'})
    }
    if (this.$store.state.isAuthenticated) {
      this.getAuthLikes();
    }
    this.getPosts();
  },
  methods:{
    getPosts(){
        axios.get(this.$route.params.route)
        .then(res=>{
            this.posts = res.data.data;
        })
        .catch(err => {
        })
    },
    getAuthLikes(){
      axios.get('/api/user/likesGiven').then(res =>{
        this.likes = res.data.data;
      })
      .catch(err=>{
      })
    }
  }
}
</script>

<style>

</style>