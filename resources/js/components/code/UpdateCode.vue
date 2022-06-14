<template>
<div>
  <div id="editor">
    <!-- EDITOR -->
    <div class="code_enter">
      <Editor class="editor" :code="post.html" lang="xml" language="HTML" v-on:update="updateCode"/>
      <Editor class="editor" :code="post.css" lang="css" language="CSS" v-on:update="updateCode"/>
      <Editor class="editor" :code="post.js" lang="js" language="JS" v-on:update="updateCode"/>
    </div>
    <!-- PREVIEW -->
    <Preview v-if="previewMode" 
      :src="src" 
      :postName="postName" 
      :frameworksName="frameworksName" 
      :tags="post.tags"
    class="code_preview-wrapper"></Preview>
  
    <!-- OUTPUT -->
    <div class="code_output">
      <iframe id="code" :srcdoc="src" class="code-represent"> </iframe>
      <div style="position:absolute;top:0;z-index:-5;" id="codeScreenArea"></div>
    </div>
  </div>

  </div>
</template>

<script>

//Code mirror
import * as CodeMiror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';

import 'codemirror/mode/gfm/gfm.js';

//Editor
import Editor from './Editor.vue';
import Preview from './../navs/Preview.vue';

//Html2canvas
import html2canvas from 'html2canvas';

export default {
  components: { 
    Editor,
    Preview,
  },
  data() {
    return {
        src:'',
        xml:'',
        css:'',
        js:'',
        post:'',
        scripts:'',
        previewMode: false,
        frameworksName:'',
        tags:[],
 
    }
  },

  mounted() {
    //this come from navUdate
    this.$root.$on('update', (postName) => this.preView(postName));
    this.$root.$on('changeFramework', newFrameworks =>{
      this.frameworksCDN=newFrameworks.cdns;
      this.tags=newFrameworks.tags;
      this.frameworksName=newFrameworks.name
      this.updateSrc();
    });
    this.$root.$on('cancelPreview', ()=>{this.preView(this.postName)});
    this.$root.$on('save', (tags)=>{
      this.tags=tags;
      this.update();
    });
    this.getCode();

  },
  methods: {
    check(){
      axios.get('/api/post/isMyOwn/'+this.post.idPost)
        .then(res=>{
          if (!res.data) {
            this.$router.push({name:'show-code', id:this.post.idPost});
          }
        })
        .catch(err=>{
        })
    },

    getCode(){
      axios.get('/api/post/code/'+this.$route.params.id)
      .then(res => {

          this.post = res.data.data[0];
          this.tags=this.post.tags;

          let dataToNav = {
            userName:this.post.name,
            postName:this.post.postName,
            idPost:this.post.idPost
          }

          this.$root.$emit('navUpdate', this.post);
          this.check();
      })
      .catch(err => {
      })
    },

    updateCode(lang, code){
      this[lang] = code;
      this.updateSrc();
    },

    updateSrc(){
        this.src = `
        <head>
            ${this.post.script}
        </head>
        <body>
            <body>${this.xml}</body>
            <style>${this.css}</style>
            <script>${this.js}<\/script>
        </body>`;
    },

    preView(postName){
      if (postName=='Undefined') postName = this.post.postName;
      this.postName = postName;
      this.previewMode = !this.previewMode;
    },

    update(){
      //POST
      axios.put('/api/post/code/'+this.post.idPost, {
        'postName': this.postName,
        'html':this.xml,
        'css':this.css,
        'js':this.js,
        'script':this.post.script,
        })
      //TAGS
      .then(()=>{
        let data = {
          tags:this.tags,
          idPost:this.post.idPost,
        }
        axios.post('/api/tag/tag', data);
      })
      //Go to prpofile
      .then(() => {
        this.$router.push({name:'my-code'})
        this.update = ()=>{ };
      })
      .catch((err)=>{
        if (err.response.status==403) {
          this.$router.push({name:'permissError'})
        }
        this.errors = error.response.data.errors;
      })
    },
  },

  
}
</script>

<style>

</style>