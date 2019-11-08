<template>
 <ul>
   <li v-for="text in textList" :key="text">{{text}}</li>
 </ul> 
</template>

<script>
export default {
  name: 'TextList',
  props: {
    textList: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
</style>