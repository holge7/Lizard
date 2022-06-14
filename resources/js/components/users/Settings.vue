<template>
    <div id="setting-wrapper">
        <h1 class="settings-title">{{$t('settings.settingsProfile')}}</h1> 
        <div id="nor-wrapper">
            <div id="settings-options" class="settings-normal">
                <div class="option nor-zone">
                    <h3>{{$t('settings.infoZone')}}</h3>
                </div>
                <div class="option">
                    <p>{{$t('settings.email')}} &nbsp;&nbsp;</p>
                    <p>{{user.email}}</p>
                </div>
                <div class="option">
                    <p>{{$t('settings.createdDate')}} &nbsp;&nbsp;</p>
                    <p>{{user.created.split('T')[0]}}</p>
                </div>
            </div>
            <div id="settings-options" class="settings-normal">
                <div class="option nor-zone">
                    <h3>{{$t('settings.normalZone')}}</h3>
                    <p><i>{{$t('settings.msg1')}}</i></p>
                </div>
                <div class="option">
                    <p>{{$t('settings.name')}} &nbsp;&nbsp;</p>
                    <input class="input-data" type="text" name="name" :placeholder="$t('log.holder_name')" v-model="user.name">
                </div>
                <div class="option">
                    <p>Avatar&nbsp;&nbsp;</p>
                    <img v-if="imagepreview==null" class="option-img" :src="'/storage/'+user.img" alt="">
                    <img v-else class="option-img" :src="imagepreview" alt="">
                    <label for="img">{{$t('settings.cambiar')}} avatar</label>
                    <input id="img" style="visibility:hidden;" class="input-data" placeholder="img" type="file" name="img" @change="imgSelected">
                </div>
                <div class="option">
                    <p>{{$t('settings.lang')}}</p>
                    <LangSwitch id="lang_switch"></LangSwitch>
                </div>
                <div class="option">
                    <button @click="saveNormal" class="button save-button">{{$t('settings.save')}}</button>
                </div>
            </div>
            <div id="settings-options" class="settings-danger">
                <div class="option dan-zone">
                    <h2>{{$t('settings.danZone')}}</h2>
                </div>
                <div class="info">
                    <p>{{$t('settings.danMsg')}}</p>
                </div>
                <div class="option option-password">
                    <p>{{$t('settings.password')}}</p>
                    <input v-model="pass1" class="input-data" type="password" name="password" :placeholder="$t('log.holder_pass')">
                    <input v-model="pass2" class="input-data" type="password" name="password" :placeholder="$t('log.holder_pass')">
                    <button @click="changePass" class="button">{{$t('settings.changePass')}}</button>
                </div>
                <div class="option">
                    <button @click="drop" class="button">
                        <h3>{{$t('settings.dropAccount')}}</h3>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LangSwitch from './../navs/LangSwitch.vue';
export default{
    components:{
        LangSwitch,
    },
    data() {
        return {
            user:{
                created:''
            },
            imagepreview:null,
            pass1:'',
            pass2:'',
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        imgSelected(e){
            this.user.img = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.user.img);
            reader.onload = e => {
                this.imagepreview = e.target.result;
            };
        },
        getData(){
            axios.get('/api/user/authData').then((res)=>{
                this.user = res.data;
            })
            .catch((err)=>{
            if (err.response.status==403) {
                this.$router.push({name:'permissError'})
            }
            });
        },
        saveNormal(){
            let data = new FormData;
            data.append('name', this.user.name)
            data.append('img', this.user.img)
            axios.post('/api/user/updateUser', data)
            .then((res) =>{
                //Logout
                axios.post('/api/logout').then(()=>{
                    this.$store.dispatch('logout');
                    this.$router.push({name:"login"});
                })
                .catch((e)=>{
                })
            }).catch((error) =>{
                //this.errors = error.response.data.errors;
            })
        },
        changePass(){
            if (this.pass1.length>7) {
                if (this.pass1==this.pass2) {
                    let data = {
                        'pass1':this.pass1,
                        'pass2':this.pass2,
                    }
                    axios.post('/api/user/updatePassUser', data)
                    .then(()=>{
                        this.$store.dispatch('logout');
                        this.$router.push({name:"login"});
                    })
                }
            }
        },
        drop(){
            if (confirm('Are you sure?')) {
                axios.post('/api/user/deleteUser')
                    .then(()=>{
                    this.$store.dispatch('logout');
                    this.$router.push({name:"login"});
                });
            }
        }
    },
}
</script>