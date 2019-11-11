<template>
  <text-list :text-list="textList"></text-list>
</template>

<script>
import TextList from '../TextList'

export default {
  name: 'TemplateText',
  components: { TextList },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      textList: {}
    }
  }
}
</script>