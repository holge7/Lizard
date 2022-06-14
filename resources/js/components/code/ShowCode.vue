<template>
<div>
  <div id="editor">
      <div class="code_enter">
        <Editor class="editor" :code="post.html" lang="xml" language="HTML" v-on:update="updateCode"/>
        <Editor class="editor" :code="post.css" lang="css" language="CSS" v-on:update="updateCode"/>
        <Editor class="editor" :code="post.js" lang="js" language="JS" v-on:update="updateCode"/>
      </div>
    <div class="code_output">
      <iframe id="code" :srcdoc="src" class="code-represent"> </iframe>
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

//Html2canvas
import html2canvas from 'html2canvas';

export default {
  components: { Editor },
  data() {
    return {
        src:'',
        post:'',
        scripts:'',
    }
  },
  created(){
    this.getCode();
  },
  methods: {
    getCode(){
        axios.get('/api/post/code/'+this.$route.params.id)
        .then(res => {
            this.post = res.data.data[0];
        })
        .catch(err => {
        })
    },
    updateCode(lang, code){
      this.post[lang] = code;
      this.updateSrc();
    },
    updateSrc(){
      this.src = `
           <head>${this.post.script}</head>
           <body>${this.post.xml}</body>
           <style>${this.post.css}</style>
           <script>${this.js}<\/script>
           `;
      this.$root.$emit('navOthers', this.post);
    },
  },
}
</script>

<style>

</style>