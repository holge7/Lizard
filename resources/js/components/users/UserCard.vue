<template>
  <div>
    <div class="user_card-wrapper">
        <img @click="showUser" class="user_card-img" :src="'/storage/'+user.img" alt="">
        <div class="user_card-details">
            <div @click="showUser" class="user_card-name">{{user.name}}</div>
            <div class="user_card-posts">Posts: {{user.posts}}</div>
        </div>
        <button @click="follow" class="button-Unfollow" v-if="this.$store.state.follows.followings.includes(user.idUsu)"><i class="bi bi-person-dash-fill"></i></button>
        <button @click="follow" class="button-follow" v-else><i class="bi bi-person-plus-fill"></i></button>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        user:{
            default:''
        }
    },

    methods:{
        follow(){
            let data = {
                idUsu:this.user.idUsu,
            }
            axios.post('/api/user/follow/follow',data)
            .then(res=>{
                if(this.$store.state.follows.followings.includes(this.user.idUsu)){
                    //Change button
                    let index = this.$store.state.follows.followings.indexOf(this.user.idUsu);
                    this.$store.state.follows.followings.splice(index,1);

                }else{
                    //Change button
                    this.$store.state.follows.followings.push(this.user.idUsu);
                }
            })
            .catch(err=>{
            });
        },
        showUser(){
            this.$router.push({name:'code-others', params: { idUsu: this.user.idUsu }})
        }
    }
}
</script>

<style>

</style>