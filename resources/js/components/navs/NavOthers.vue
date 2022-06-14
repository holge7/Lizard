<template>
  <div>
    <nav id="nav" class="nav-3">
        <div id="nav_data">
            <ul class="button" id="nav-logo">
                <img :src="'/storage/logo.svg'" id="logo" alt="">
            </ul>
            <ul id="nav_data-post">
                <li><h3 id="data_post-name">{{post.postName}}</h3></li>
                <li @click="showUser()"><p id="data_user-name">{{post.name}}</p></li>
            </ul>
        </div>
        <div id="nav_actions">
            <ul>
                <button @click="like()" class="button-like">
                    <li v-if="likes.includes(post.idPost)">
                        <i class="a bi bi-heart-fill"></i>
                    </li>
                    <li v-else>
                        <i class="bi bi-heart"></i>
                    </li>
                </button>
            </ul>
            <ul>
                <button class="button-fork" @click="fork">
                    <i class="bi bi-share"></i> &nbsp; Fork
                </button>
            </ul>
            <ul>
                <li class="nav-mains"><router-link :to="{name:'home'}" >{{$t('nav.home')}}</router-link></li>
            </ul>
            <ul>
                <li><User-Options></User-Options></li>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
import UserOptions from './UserOptions.vue';
export default {
    components:{
        UserOptions,
    },
    data() {
        return {
            post:{},
            likes:[],
        }
    },
    mounted() {
        this.$root.$on('navOthers', (post)=>{
            this.post = post;
        })
    },
    methods:{
        getAuthLikes(){
            axios.get('/api/user/likesGiven').then(res =>{
                this.likes = res.data.data;
            })
            .catch(err=>{
            })
        },
        like(){
            let data = {
                'idPost': this.post.idPost,
            }

            axios.post('/api/post/like', data).then(res=>{
                //Like action change <3 and number
                if (this.likes.includes(this.post.idPost)) {
                    let index = this.likes.indexOf(this.post.idPost);
                    this.likes.splice(index, 1);
                }else{
                    this.likes.push(this.post.idPost);
                }
            })
            .catch(err=>{
            })
        },
        fork(){
            let data = new FormData;
            data.append('idUsu', this.$store.state.auth.idUsu);
            data.append('postName', this.post.postName);
            data.append('html', this.post.xml);
            data.append('css', this.post.css);
            data.append('js', this.post.js);
            //data.append('img', this.post.img);
            data.append('script', this.post.script);
            data.append('fork', this.post.fork);

          axios.post('/api/post/code', data).then(res=>{
                this.$router.push({name:'my-code'});
          })
        },
        showUser(){
            //Not to view your user like other user
            if (this.post.idUsu != this.$store.state.auth.idUsu) {
                this.$router.push({name:'code-others', params: { id: this.post.idUsu }})
            }else{
                this.$router.push({name:'my-code', params: { id: this.post.idPost }});
            }
        },
    }


}
</script>

<style>

</style>