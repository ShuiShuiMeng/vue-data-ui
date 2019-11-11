<template>
  <li>
    <div :class="{bold: isFolder}" @click="toggle();changeNode()">
      {{ item.name }}
      <span v-if="isFolder" class="toggle">[{{ isOpen ? ' - ' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-item
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        class="item"
        @change-node="$emit('change-node', $event)"
        @add-item="$emit('add-item', $event)"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder() {
      return this.item.children && this.item.children.length
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    changeNode() {
      this.$emit('change-node', this.item)
    }
  }
}
</script>

<style scoped>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}

.bold {
  font-weight: bold;
}
.toggle {
  font-weight: normal;
  font-size: 10px;
}
</style>
