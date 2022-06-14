<template>
  <div id="error">
    <h2>{{msg}}</h2>
    <button @click="foo" class="button-err">{{$t('permiss.back')}}</button>
  </div>
</template>

<script>
export default {
    props: {
      'msg': {
        default: 'You dont have permiss here 😈'
      }
    },
    mounted() {
      //If we are here, we have problems...
      //So if the user have bad intentions and he change her permiss or her data, we put the correct ones again
      axios.get('/api/user/authId').then(res => {
          axios.get('/api/user/follow/userData/'+res.data.data).then(res=>{
            this.$store.dispatch('login', res.data);
          }).catch(err => {
          })

      }).catch(err => {
      })
 
      
    },
    methods:{
        foo(){
            this.$router.push({name:'home'});
        }
    }
}
</script>

<style>

</style>