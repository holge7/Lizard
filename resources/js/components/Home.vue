<template>
<div id="home">
  <!-- ---- -->
  <!-- POST -->
  <!-- ---- -->
  <div id="post-wrapper">
    <h1 class="title">{{$t('home.top_comopnents')}} <hr> </h1>

    <div id="posts">
    <!-- ACTUAL POSTS -->
      <button class="button-post_next" @click="next"><i class="bi bi-arrow-bar-right"></i></button>
      <button v-if="offset>=4" class="button-post_next post_back" @click="back"><i class="bi bi-arrow-bar-left"></i></button>
      <!-- <div v-if="offset>=4" class="post_back" @click="back"><i class="bi bi-arrow-bar-left"></i></div> -->
      <Post 
        v-for="post in posts" :key="post.idPost"
          :data="post"
          :likes="likes"
          class="post" 
      ></Post>
      <Post v-if="!actualNull" :likes="[0]" class="post"></Post>
      <Post v-if="!actualNull" :likes="[0]" class="post"></Post>
      <Post v-if="!actualNull" :likes="[0]" class="post"></Post>
      <Post v-if="!actualNull" :likes="[0]" class="post"></Post>
    </div>

  </div>

    
  <!-- ----- -->
  <!-- USERS -->
  <!-- ----- -->
  <div id="users_wrapper">
    <div id="users-title">
      <h1 class="title">Interesting People <hr></h1>
    </div>
    <div id="users">
      <User-Card v-for="user in interestingUsers" :key="user.idUsu"
        class="user"
        :user="user"
      />
    </div>
    <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#1b1b1d" fill-opacity="1" d="M0,32L10.9,32C21.8,32,44,32,65,48C87.3,64,109,96,131,101.3C152.7,107,175,85,196,96C218.2,107,240,149,262,154.7C283.6,160,305,128,327,133.3C349.1,139,371,181,393,197.3C414.5,213,436,203,458,202.7C480,203,502,213,524,234.7C545.5,256,567,288,589,277.3C610.9,267,633,213,655,202.7C676.4,192,698,224,720,234.7C741.8,245,764,235,785,224C807.3,213,829,203,851,186.7C872.7,171,895,149,916,128C938.2,107,960,85,982,64C1003.6,43,1025,21,1047,16C1069.1,11,1091,21,1113,48C1134.5,75,1156,117,1178,122.7C1200,128,1222,96,1244,90.7C1265.5,85,1287,107,1309,138.7C1330.9,171,1353,213,1375,229.3C1396.4,245,1418,235,1429,229.3L1440,224L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z"></path>
    </svg>
  </div>

  <!-- ------ -->
  <!-- FOOTER -->
  <!-- ------ -->
  <footer id="footer_wrapper">
    <br><br><br>
    <h3>Lizard®</h3>
    <div id="footer_wrapper-data">
      <p><b>GitHub:</b> <a href="https://github.com/holge7/Lizard">https://github.com/holge7/Lizard</a></p>
      <p><b>Sponsors:</b> Holge</p>
      <p><b>Based in:</b> CodePen - GitHub</p>
      <p><b>Version: </b> 1.0</p>
    </div>
  </footer>

</div>
</template>

<script>
import Post from './code/OnePost.vue';
import UserCard from './users/UserCard.vue';
export default {
  components:{
    Post,
    UserCard,
  },
  data() {
    return {
      posts: [],
      likes: [],
      limit:7,
      offset: 0,
      interestingUsers:[],
    }
  },
  mounted() {
    if (this.$store.state.isAuthenticated) {
      this.getAuthLikes();
    }
    this.getPosts();
    this.getPeople();

  },
  computed:{
    beforeNull(){
      return this.beforePosts.length;
    },
    actualNull(){
      return this.posts.length;
    },
    afterNull(){
      return this.afterPosts.length;
    }
  },
  methods:{
    getPosts(){
      this.afterPosts = [];
      this.posts=[]
        axios.get('/api/code/'+this.offset).then(res=>{
            this.posts = res.data.data;
        })
        .catch(err=>{
        })
    },
    getAuthLikes(){
      axios.get('/api/user/likesGiven').then(res =>{
        this.likes = res.data.data;
      })
      .catch(err=>{
      })
    },
    next(){
      this.offset+=4;
      this.getPosts();
    },
    back(){
      this.offset-=4;
      this.getPosts();
    },
    getPeople(){
      axios.get('/api/user/random')
      .then(res => {
        this.interestingUsers = res.data;
      })
      .catch(err=>{
      })
    }


  },
}
</script>

<style>

</style>