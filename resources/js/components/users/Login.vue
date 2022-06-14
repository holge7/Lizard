<template>
  <div class="form">
    <div class="form-container">
        <h1>{{$t('log.login')}}</h1>
        <form>
            <div v-if="error" class="form-error">{{$t('log.err_log')}}</div>
            <input class="input-data" type="email" name="email" placeholder="Email" v-model="form.email" required autocomplete="email">
            <br>
            <input class="input-data" type="password" name="password" v-model="form.password" placeholder="Pasword">
            <br>
            <button class="input-submit" @click.prevent="saveForm" type="submit" >{{$t('log.login')}}</button>
        </form>
        <div class="form-or">
            <hr>
            <span class="or">{{$t('log.or')}}</span>
            <hr>
        </div>
        <p class="form-info"><i>{{$t('log.dont_account_msg')}}<br></i><b><router-link class="nav-link" :to="{name:'register'}">{{$t('log.register_now')}}</router-link></b></p>
    </div>
  </div>        
</template>

<script>
export default {
    data() {
        return {
            form:{
                email:'',
                password:'',
            },
            error:false
        }
    },
    methods: {
        saveForm(){
            this.axios.post('/api/login', this.form).then((res)=>{
                if (res.data.status) {
                    axios.get('/api/user/follow/userData/'+res.data.data.idUsu).then(res => {
                        this.$store.dispatch('login', res.data);
                        this.$router.push({name:"home"})
                    })
                }else{
                    this.error = true;
                }
            }).catch((error)=>{
            })
        },
    }
}
</script>

<style>

</style>