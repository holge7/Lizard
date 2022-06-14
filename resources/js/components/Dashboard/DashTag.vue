<template>
    <div>
        <table id="table-wrapper">
            <thead>
                <tr>
                    <th scope="col">{{$t('dashTag.tag')}}</th>
                    <th scope="col">{{$t('dashTag.nameTag')}}</th>
                </tr>
            </thead>
            <tbody id="table-body">
                <tr v-for="tag in tags">
                    <th :id="'user.'+tag.idUsu+'.idTag'" scope="row">{{tag.idTag}}</th>

                    <!-- Name -->
                    <td :id="'user.'+tag.idUsu+'.name'" scope="row">
                    <span v-if="tag.tag != tagEdit.tag">{{tag.tag}}</span>
                    <input v-model='tag.tag' v-else />  
                    </td>
        
                    
                    <button class="button-delete button" @click.prevent="deleteTag(tag)" v-if="!tagEdit">{{$t('dash.delete')}}</button>
                    <button class="button-edit button" @click.prevent="edit(tag)" v-if="!tagEdit">{{$t('dash.edit')}}</button>
                    <button class="button-susccess button" @click.prevent="editSuccess()" v-if="tagEdit.idTag == tag.idTag">{{$t('dash.success')}}</button>
                    <button class="button-delete button" @click.prevent="editCancel(tag)" v-if="tagEdit.idTag == tag.idTag">{{$t('dash.cancel')}}</button>
                    
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
        tagEdit:false,
        tags:[]
      }
    },
    created() {
      this.getTags();
    },
    methods: {
      //Crud
      //Delete one user
      deleteTag(tagDelete){
        let data = {
            'id':tagDelete.idTag
        }
        axios.delete('/api/tag/tag/'+tagDelete.idTag).then((e)=>{
          //Update the array with the users
          this.tags = this.tags.filter((u) => u.idTag != tagDelete.idTag);
        })
        .catch((e)=>{
        });
      },

      //Edit one user
      edit(tagEdit){
        this.tagEdit = tagEdit;
      },
      editSuccess(){
        let data = {
            'idTag':this.tagEdit.idTag,
            'nameTag':this.tagEdit.tag
        }
        axios.post('/api/tag/editTag/'+data.idTag, data).then((e)=>{
          this.tags.map((u)=>{
            if (u.idTag == this.tagEdit.idTag) {
              u = this.tagEdit;
            }
          })
        })
        .catch((e)=>{
        })
        this.tagEdit = false;
      },
      editCancel(){
        this.tagEdit = false;
      },
      getTags(){
        axios.get('/api/tag/tag')
        .then(res => {
            this.tags = res.data
        })
        .catch(err =>{
        })
      }
    },
}
</script>
<style>

</style>