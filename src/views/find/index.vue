<template>
  <div class="app-container documentation-container">
    <a
      class="document-btn"
      target="_blank"
      @click="getNode"
    >Documentation</a>
    <a
      class="document-btn"
      target="_blank"
      href="https://github.com/PanJiaChen/vue-element-admin/"
    >Github Repository</a>
    <a
      class="document-btn"
      target="_blank"
      href="https://panjiachen.gitee.io/vue-element-admin-site/zh/"
    >国内文档</a>
    <a
      class="document-btn"
      target="_blank"
      href="https://panjiachen.github.io/vue-element-admin-site/zh/job/"
    >内推招聘</a>
  </div>
</template>

<script>
import { fetchNodeByKey } from '@/api/tree'

export default {
  name: 'Find',
  components: {},
  data() {
    return {
      articleList: []
    }
  },
  created() {
    this.getNode()
  },
  methods: {
    getNode() {
      fetchNodeByKey({ key: '1' }).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  .document-btn {
    margin-left: 50px;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    margin-bottom: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
