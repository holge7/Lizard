<template>
<div>
  <!-- EDITOR -->
  <div class="code_enter">
    <Editor class="editor" lang="xml" language="HTML" v-on:update="updateCode"/>
    <Editor class="editor" lang="css" language="CSS" v-on:update="updateCode"/>
    <Editor class="editor" lang="js" language="JS" v-on:update="updateCode"/>
  </div>

  <!-- PREVIEW -->
  <Preview v-if="previewMode" 
    :src="src" 
    :postName="postName" 
    :frameworksName="frameworksName" 
    :tags="tags"
  class="code_preview-wrapper"></Preview>

  <!-- OUTPUT -->
  <div class="code_output">
    <iframe id="code" :srcdoc="src" class="code-represent"> </iframe>
    <div style="position:absolute;top:0;z-index:-5;" id="codeScreenArea"></div>
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
      xml:'',
      css:'',
      js:'',
      src:'',
      img:'',
      frameworksCDN:'',
      frameworksName:'',
      idPost:'',
      element:'',
      previewMode: false,
      postName:'',
      tags:[],
    }
  },
  mounted(){
    //this come from nav
    this.$root.$on('preview', (postName) => this.preView(postName));

    //this come from settings
    this.$root.$on('changeFramework', newFrameworks =>{
      this.frameworksCDN=newFrameworks.cdns;
      this.tags=newFrameworks.tags;
      this.frameworksName=newFrameworks.name
      this.updateSrc();
    });
    this.$root.$on('cancelPreview', ()=>{this.preView(this.postName)});
    this.$root.$on('save', (tags)=>{
      this.tags=tags;
      this.save();
    });
  },
  methods: {

    updateCode(lang, code){
      this[lang] = code;
      this.updateSrc();
    },

    updateSrc(){
        this.src = `
        <head>
            ${this.frameworksCDN}
        </head>
        <body>
            <body>${this.xml}</body>
            <style>${this.css}</style>
            <script>${this.js}<\/script>
        </body>`;
    },

    preView(postName){
      this.postName = postName;
      this.previewMode = !this.previewMode;
    },


    async save(){
      //set the code background the page to screeshot ( z-index -5 )
      //shhh this is our secret...
      let codeScreenArea = document.getElementById("codeScreenArea");
      codeScreenArea.innerHTML += this.frameworksCDN;
      codeScreenArea.innerHTML += this.xml;
      codeScreenArea.innerHTML += '<style>'+this.css+'</style>';
      
      await html2canvas(codeScreenArea, {
        //Set properties of the canvas
        width:500,
        height:374,
      })
      //POST
      .then( async (canvas)=>{
        //convert the canvas to  blob and this to file :)))
        canvas.toBlob((blob)=>{
          this.img = new File([blob], 'prueba.jpg', {type: "image/jpeg"});
        
          let data = new FormData;
          data.append('idUsu', this.$store.state.auth.idUsu);
          data.append('postName', this.postName);
          data.append('html', this.xml);
          data.append('css', this.css);
          data.append('js', this.js);
          data.append('img', this.img);
          data.append('script', this.frameworksCDN);

          axios.post('/api/post/code', data).then(res=>{
            this.idPost = res.data.post.idPost;
            this.$router.push({name:'my-code'});

            //Delete this function to bug send multiples createCode
            this.save =()=>{};
          })
          //TAGS
          .then(()=>{
            let data = {
              tags:this.tags,
              idPost:this.idPost,
            }
            axios.post('/api/tag/tag', data);
          })

        });
      })
      .catch((err)=>{
        this.errors = error.response.data.errors;
      });
    },
  },

}
</script>

<style>

</style>