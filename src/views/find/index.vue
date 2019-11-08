<template>
  <!-- the demo root element -->
  <div class="components-container">
    <aside><strong>知识树</strong>----你可以在左侧查看知识树的结构，并在右侧显示当前节点的具体信息</aside>
    <split-pane split="vertical" @resize="resize">
      <template slot="paneL">
        <div class="left-container">
          <ul class="tree">
            <tree-item :item="treeData" @add-item="addItem" />
          </ul>
        </div>
      </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
            <div class="top-container">
              <ul class="node-message">
                <li>test11</li>
                <li>test22</li>
              </ul>
            </div>
          </template>
          <template slot="paneR">
            <div class="bottom-container">
              <ul class="node-message">
                <li>test1</li>
                <li>test2</li>
              </ul>
            </div>
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>

<script>
import { fetchNodeByKey } from '@/api/tree'
import TreeItem from '@/components/TreeItem'
import splitPane from 'vue-splitpane'
// demo data
var treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello', children: [] },
    { name: 'wat', children: [] },
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
  components: { TreeItem, splitPane },
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
    addItem(item) {
      item.children.push({
        name: 'new.stuff'
      })
    },
    resize() {
      console.log('resize')
    }
  }
}
</script>

<style scoped>
.components-container {
  position: relative;
  height: 100vh;
}

.left-container {
  background-color: #F38181;
  height: 100%;
}

.top-container {
  background-color: #FCE38A;
  height: 100%;
  width: 100%;
}

.bottom-container {
  background-color: #95E1D3;
  height: 100%;
  width: 100%;
}

.tree {
  float: left;
  width: 100%;
  padding-left: 1.5em;
  line-height: 1.5em;
  list-style-type: dot;
}
.node-message {
  float: left;
  width: 100%;
}

</style>
