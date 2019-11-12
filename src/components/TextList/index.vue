<template>
  <ul>
    <li v-for="(text, index) in textList" :key="index">{{ text }}</li>
  </ul>
</template>

<script>
export default {
  name: 'TextList',
  props: {
    textList: {
      type: Array,
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
