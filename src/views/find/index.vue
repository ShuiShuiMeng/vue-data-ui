<template>
  <!-- the demo root element -->
  <ul id="demo">
    <tree-item
      :item="treeData"
      @make-folder="makeFolder"
      @add-item="addItem"
    />
  </ul>
</template>

<script>
import { fetchNodeByKey } from '@/api/tree'
import Vue from 'vue'
// demo data
var treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}

export default {
  name: 'Find',
  components: {},
  data() {
    return {
      treeData: treeData
    }
  },
  created() {
  },
  methods: {
    getNode() {
      fetchNodeByKey({ key: '1' }).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
    },
    makeFolder(item) {
      Vue.set(item, 'children', [])
      this.addItem(item)
    },
    addItem(item) {
      item.children.push({
        name: 'new.stuff'
      })
    }
  }
}
</script>

<style scoped>
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
