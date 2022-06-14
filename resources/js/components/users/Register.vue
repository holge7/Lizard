<template>
  <div class="form">
    <div class="form-container">
    <h1>{{$t('log.register')}}</h1>
    <img :src="imagepreview" style="max-height:100px;" alt="">
    <form method="POST" enctype="multipart/form-data">
        <span v-if="errors.name" style="color:red;">{{errors.name}}<br></span>
        <input class="input-data" type="text" name="name" :placeholder="$t('log.holder_name')" v-model="form.name" required autofocus>
        <br>
        <span v-if="errors.email" style="color:red;">{{errors.email}}<br></span>
        <input class="input-data" type="email" name="email" :placeholder="$t('log.holder_email')" v-model="form.email" required autocomplete="email">
        <br>
        <span v-if="errors.password" style="color:red;">{{errors.password}}<br></span>
        <input class="input-data" type="password" name="password" v-model="form.password" :placeholder="$t('log.holder_pass')">
        <br>
        <span v-if="errors.password_confirmation" style="color:red;">{{errors.password_confirmation}}<br></span>
        <input class="input-data" type="password" name="password_confirmation" v-model="form.password_confirmation" :placeholder="$t('log.holder_confirm_pas')">
        <br>
        <input class="input-data" placeholder="img" type="file" name="img" @change="imgSelected">
        <button class="input-submit" @click.prevent="saveForm" type="submit">{{$t('log.register')}}</button>
    </form>
    <br>
    <div class="form-or">
        <hr>
        <span class="or">{{$t('log.or')}}</span>
        <hr>
    </div>
    <p class="form-info"><i>{{$t('log.have_account')}} </i><br><b><router-link class="nav-link" :to="{name:'login'}">{{$t('log.login_now')}}</router-link></b></p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form:{
                name:'',
                email:'',
                password:'',
                password_confirmation:'',
                img:'',
            },
            imagepreview: '',
            errors:[]
        }
    },
    methods: {
        //Img preview
        imgSelected(e){
            this.form.img = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.form.img);
            reader.onload = e => {
                this.imagepreview = e.target.result;
            };
        },
        saveForm(){
            let data = new FormData;
            data.append('name', this.form.name)
            data.append('email', this.form.email)
            data.append('password', this.form.password)
            data.append('img', this.form.img)
            
            axios.post('/api/users', data).then((req) =>{
                this.$router.push({name:"login"});
            }).catch((error) =>{
                //this.errors = error.response.data.errors;
            })
        }
    },
}
</script>

<style>

</style>