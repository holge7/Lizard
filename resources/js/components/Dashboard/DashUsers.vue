<template>
<div>
<table id="table-wrapper">
        <thead>
        <tr>
            <th scope="col">{{$t('dashUsers.id')}}</th>
            <th scope="col">{{$t('dashUsers.name')}}</th>
            <th scope="col">{{$t('dashUsers.email')}}</th>
            <th scope="col">{{$t('dashUsers.permissions')}}</th>
            <th scope="col">{{$t('dashUsers.created')}}</th>
            <th scope="col">{{$t('dashUsers.options')}}</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.idUsu">
                <th :id="'user.'+user.idUsu+'.id'" scope="row">{{user.idUsu}}</th>

                <!-- Name -->
                <td :id="'user.'+user.idUsu+'.name'" scope="row">
                  <span v-if="!userEdit || userEdit.idUsu != user.idUsu">{{user.name}}</span>
                  <input v-model='userEdit.name' v-else />  
                </td>

                <!-- Email -->
                <td :id="'user.'+user.idUsu+'.email'" scope="row">
                <span v-if="!userEdit || userEdit.idUsu != user.idUsu">{{user.email}}</span>
                <input v-model='userEdit.email' v-else />  
                </td>
                <td>{{user.permissions}}</td>
                <td>{{user.created_at.substr(0,10)}}</td>
                <td v-if="user.idUsu != $store.state.auth.permissions.idUsu">
                <button class="button-delete button" @click.prevent="deleteUser(user)" v-if="!userEdit">{{$t('dash.delete')}}</button>
                <button class="button-edit button" @click.prevent="edit(user)" v-if="!userEdit">{{$t('dash.edit')}}</button>
                <button class="button-susccess button" @click.prevent="editSuccess()" v-if="userEdit.idUsu == user.idUsu">{{$t('dash.success')}}</button>
                <button class="button-delete button" @click.prevent="editCancel(user)" v-if="userEdit.idUsu == user.idUsu">{{$t('dash.cancel')}}</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    data() {
      return {
        users:[],
        userEdit:false,
      }
    },
    created() {
      this.getUsers();
    },
    methods: {
      //Getters
      //Get all users
      getUsers(){
        axios.get('/api/user/users').then((res)=>{
          this.users = res.data;
        })
        .catch((err)=>{
          if (err.response.status==403) {
            this.$router.push({name:'permissError'})
          }
        });
      },

      //Crud
      //Delete one user
      deleteUser(userDelete){
        axios.delete('/api/user/users/'+userDelete.idUsu).then((e)=>{
          //Update the array with the users
          this.users = this.users.filter((u) => u.idUsu != userDelete.idUsu);
        })
        .catch((e)=>{
        });
      },

      //Edit one user
      edit(editUser){
        this.userEdit = editUser;
      },
      editSuccess(){
        this.axios.put('/api/user/users/'+this.userEdit.idUsu, this.userEdit).then((e)=>{
          this.users.map((u)=>{
            if (u.idUsu == this.userEdit.idUsu) {
              u = this.userEdit;
            }
          })
        })
        .catch((e)=>{
        })
        this.userEdit = false;
      },
      editCancel(){
        let inputName = document.getElementById("user."+this.userEdit.idUsu+".name");
        inputName.innerHTML = this.userEdit.name;
        this.userEdit = false;
      },
      getPosts(){
        axios.get('/api/post/allPosts')
        .then(res => {
        })
      }
    },
}
</script>
<style>

</style>