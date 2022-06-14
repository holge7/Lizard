<template>
<div>
    <nav id="nav" class="nav-2">
        <ul class="nav-info">
            <img class="button" :src="'/storage/logo.svg'" id="logo" alt="">
            <div>
                <input id="project-title" type="text" placeholder="Untitled" :value="post.postName">
                <h6 id="logo-title">{{this.$store.state.auth.name}}</h6>
            </div>
        </ul>

        <!-- Options -->
        <ul class="nav-options">
            <li class="nav-option" @click="exit"><i class="bi bi-house-fill"></i>&nbsp;{{$t('nav.home')}}</li>
            <li class="nav-option" @click.prevent="update"><i class="bi bi-cloud-download-fill"></i>&nbsp;{{$t('nav.update')}}</li>
            <li class="nav-option" @click="settings"><i class="bi bi-gear-fill"></i>&nbsp;{{$t('nav.setting')}}</li>
            <li>
                <button>
                    <i v-if="this.$store.state.isAuthenticated==false" style="font-size:1.6rem" class="bi bi-person-circle"></i>
                    <User-Options v-else></User-Options>
                </button>
            </li>
        </ul>
    </nav>
    <!-- Settings -->
        <div id="settings_wrapper" v-if="settingsMode">
            <div @click="settings" class="settings_back"></div>
            <Settings class="settings"/>
        </div>
</div>
</template>

<script>
import Settings from './Settings.vue';
import UserOptions from './UserOptions.vue';
export default {
    components: { Settings,UserOptions },
    name: "naVue",
    data() {
        return {
            settingsMode:false,
            post:{},
        };
    },
    mounted(){
        this.$root.$on('navUpdate', (post)=>{
            this.post = post;
        });
    },
    methods: {
        exit() {
            this.$router.push({ name: "home" });
        },
        update() {
            //Emit to save in Create/Edit code with the name
            let postName = document.getElementById("project-title").value;
            if (!postName) postName = "Untitled";
            this.$root.$emit("update", postName);
        },
        settings(){
            this.settingsMode=!this.settingsMode;
        }
    },
}
</script>