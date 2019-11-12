<template>
  <!-- the demo root element -->
  <div class="components-container">
    <aside><strong>知识树</strong>----你可以在左侧查看知识树的结构，并在右侧显示当前节点的具体信息</aside>
    <split-pane split="vertical" @resize="resize">
      <template slot="paneL">
        <div class="left-container">
          <ul class="tree">
            <tree-item class="item" :item="treeData" @add-item="addItem" @change-node="changeNode" />
          </ul>
        </div>
      </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
            <div class="top-container">
              <template-text class="node-message" :item="templateData" />
            </div>
          </template>
          <template slot="paneR">
            <div class="bottom-container">
              <node-text class="node-message" :item="nodeData" />
            </div>
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>

<script>
import { fetchNodeById, fetchTreeByRoot } from '@/api/tree'
import { fetchTemplateById } from '@/api/template'
import TreeItem from '@/components/TreeItem'
import TemplateText from '@/components/TemplateText'
import NodeText from '@/components/NodeText'
import SplitPane from 'vue-splitpane'

var rootId = '1'

export default {
  name: 'Find',
  components: { TreeItem, SplitPane, NodeText, TemplateText },
  data() {
    return {
      treeData: {},
      templateData: {},
      nodeData: {}
    }
  },
  created() {
    this.getTree(rootId)
    this.initNodeAndTemplate(rootId)
  },
  methods: {
    initNodeAndTemplate(id) {
      fetchNodeById({ 'id': id }).then(response => {
        this.nodeData = response.data
        fetchTemplateById({ 'id': response.data.template }).then(res => {
          this.templateData = res.data
        })
      }).catch(err => {
        console.log(err)
      })
    },
    getTree(id) {
      fetchTreeByRoot({ 'id': id }).then(response => {
        this.treeData = response.data
        // console.log(response)
      }).catch(err => {
        console.log(err)
      })
    },
    getNode(id) {
      fetchNodeById({ 'id': id }).then(response => {
        this.nodeData = response.data
      }).catch(err => {
        console.log(err)
      })
    },
    getTemplate(id) {
      fetchTemplateById({ 'id': id }).then(response => {
        this.templateData = response.data
      }).catch(err => {
        console.log(err)
      })
    },
    addItem(item) {
      item.children.push({
        name: 'new'
      })
    },
    resize() {
      console.log('resize')
    },
    changeNode(item) {
      console.log(item)
      this.getTemplate(item.id)
      this.getNode(item.id)
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
.item {
  cursor: pointer;
}
</style>
