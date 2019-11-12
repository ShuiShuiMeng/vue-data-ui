<template>
  <text-list :text-list="updateText" />
</template>

<script>
import TextList from '../TextList'
import { transTime } from '@/utils/time.js'

export default {
  name: 'TemplateText',
  components: { TextList },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    updateText() {
      var template = []
      template.push('标签ID：\t' + this.item.id)
      template.push('标签名称：\t' + this.item.name)
      template.push('模板ID：\t' + this.item.template)
      var parent = ''
      if (this.item.parents === undefined || this.item.parents.length < 1) {
        parent = 'root'
      } else {
        parent = this.item.parents[0]
      }
      template.push('父节点ID：\t' + parent)
      template.push('子节点ID：\t' + this.item.children)
      template.push('创建时间：\t' + transTime(this.item.createTime))
      template.push('创建时间：\t' + transTime(this.item.updateTime))
      return template
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
