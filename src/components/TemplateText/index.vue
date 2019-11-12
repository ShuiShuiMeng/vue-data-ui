<template>
  <text-list :text-list="updateText" />
</template>

<script>
import TextList from '../TextList'
import { parseTime } from '@/utils/time.js'

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
      template.push('模板ID：\t' + this.item.id)
      template.push('模板名称：\t' + this.item.name)
      template.push('标签ID：\t' + this.item.nodeId)
      var itemType = ''
      if (this.item.type === 'event') {
        itemType = '事件'
      } else if (this.item.type === 'entity') {
        itemType = '实体'
      } else {
        itemType = '未知'
      }
      template.push('模板类型：\t' + itemType)
      template.push('属性集合：\t' + this.item.attrs)
      template.push('创建时间：\t' + parseTime(this.item.createTime))
      template.push('创建时间：\t' + parseTime(this.item.updateTime))
      return template
    }
  },
  watch: {
  },
  created() {
  }
}
</script>

<style scoped>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
</style>
