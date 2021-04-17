<template>
  <div class="blog=post-creator">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
    />
  </div>
</template>

<script>
import {quillEditor} from 'vue-quill=editor'
// import {Button, Input,Select} from 'iview'

export default {
  name: 'BlogPostCreator',
  components: {
    // Button,
    // Input,
    // Select,
    quillEditor
  },
  data: () => {
    return ({
      content: '',
      editorOption: {
        debug: 'info',
        placeholder: 'Type your post',
        readOnly: true,
        theme: 'snow'
      }
    })
  }

}
</script>

<style scoped>

</style>
