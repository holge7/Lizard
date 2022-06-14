<template>
    <div>
        <button>
            <i v-if="this.$store.state.isAuthenticated==false" style="font-size:1.6rem" class="bi bi-person-circle"></i>
            <img id="avatar" v-else :src="'/storage/'+this.$store.state.auth.img" alt="">
        </button>
        <ul id="options" v-if="options">
            <!-- Admin User -->
            <li class="button"><router-link v-if="this.$store.state.auth.permissions>1" :to="{name:'dashboard'}" >{{$t('nav.dashboard')}}</router-link></li>
            <!-- Users -->
            <li class="button"><router-link :to="{name:'my-code'}">{{$t('nav.profile')}}</router-link></li>
            <li class="button"><router-link :to="{name:'home'}">{{$t('nav.home')}}</router-link></li>
            <li class="button"><router-link :to="{name:'settings'}">{{$t('nav.setting')}}</router-link></li>
            <LangSwitch id="lang_switch"></LangSwitch>
            <li class="button"><button class="button" @click="logout">{{$t('nav.sing_out')}}</button></li>
        </ul>
    </div>
</template>

<script>
import LangSwitch from './LangSwitch.vue';
export default {
    components: {
        LangSwitch,
    },
    data() {
        return {
            options: false,
        }
    },
    mounted(){
        document.addEventListener('click', (e)=>{
            if(e.target.id == 'avatar'){
                this.options = !this.options
            }else{
                if (e.target.nodeName != "SELECT" && e.target.nodeName != "OPTION") {
                    this.options = false;
                }
            }
        })
    },
    methods: {
        logout(){
            axios.post('/api/logout').then(()=>{
                this.$store.dispatch('logout');
                this.$router.push({name:"login"});
            })
            .catch((e)=>{
            })
        },
    },
}
</script>

<style>

</style>