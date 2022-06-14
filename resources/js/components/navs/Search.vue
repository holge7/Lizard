<template>
  <div>
    <div id="search_nav">
        <div id="search_bar">
            <i class="bi bi-search"></i>
            <input @keyup="searchNames" v-model="toSearch" type="text" id="search-input" placeholder="Search Post...">
            <div id="search_options">
                <button class="button-navSearch" :class="{'search_option-select': existOption('tags')}" @click="changeOptionSearch('tags')">{{$t('nav.tags')}}</button>
                <button class="button-navSearch" :class="{'search_option-select': existOption('component')}" @click="changeOptionSearch('component')">{{$t('nav.component')}}</button>
                <!-- <button class="button-navSearch" :class="{'search_option-select': existOption('profile')}" @click="changeOptionSearch('profile')">#profile</button> -->
            </div>
        </div>
      <div id="searc_results" v-if="toSearch!=''">
        <div @click="foo(search.namee)" v-for="search in namesSearch" :key="search.id" class="searc_result" >{{search.namee}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            toSearch:'',
            namesSearch:[],
            optionsSearch:'component',
        }
    },
    mounted(){
        document.getElementById("search-input").addEventListener("keypress", (e)=>{
            if (e.key == "Enter") {
                this.foo();
            }
        })
    },
    methods:{
        searchNames(){
            axios.get('/api/getSearchName/'+this.toSearch+'/'+this.optionsSearch)
            .then(res=>{
                this.namesSearch = res.data.data;
            })
            .catch(err => {
            })
        },
        foo(search){
            if (search) this.toSearch = search.replace("#", "");
            let routeToPass='';
            switch (this.optionsSearch) {
                case 'tags':
                    routeToPass = '/api/getPostByTag/'+this.toSearch;
                    break;
                case 'component':
                    routeToPass = '/api/getPostByName/'+this.toSearch;
                    break;
            
                default:
                    break;
            }
            
            this.$router.push({name:'search', params: {route: routeToPass, name: this.toSearch}})
        },
        changeOptionSearch(option){
            this.optionsSearch = option;
            this.searchNames();
        },
        existOption(option){
            return this.optionsSearch.includes(option);
        }
    }
}
</script>

<style>

</style>