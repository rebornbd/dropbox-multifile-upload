<template>
  <div>
    <h1>FILE UPLOAD</h1>
    <icon name="upload" />
  </div>
</template>

<script>
  import Icon from './icons/IconFileUpload.vue';

  export default {
    data() {
      return {
        listOfFiles: []
      }
    },
    methods: {
      onchangeHandler(target, files) {
        const filesLength = files.length;
        for (let i=0; i<filesLength; i++) {
          const data = {};
          data.name = files[i]?.name;
          data.size = files[i]?.size;
          data.type = files[i]?.type;
          this.listOfFiles.push(data);
        }
        target.value = null;
      }
    },
    components: {
      Icon,
    }
  }
</script>
