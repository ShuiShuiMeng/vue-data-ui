<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="objectId" placeholder="对象ID" style="width: 200px" class="filter-item" @key.enter.native="handleFilter" />
      <el-button v-waves style="margin-left:20px" class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
      <el-checkbox v-model="baseShow" class="filter-item" style="margin-left:15px;">
        显示基础信息
      </el-checkbox>
      <el-checkbox v-model="attrShow" class="filter-item" style="margin-left:15px;">
        显示属性信息
      </el-checkbox>
    </div>
    <el-table
      v-if="baseShow&&baseList!==null"
      :key="tableKey"
      :data="baseList"
      border
      fit
      highlight-current-row
      style="width: 50%;margin-bottom:20px;"
    >
      <el-table-column label="对象基础属性" width="200px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="对象基础属性值" min-width="200px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.value }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      v-if="attrShow&&attrList!==null"
      :key="tableKey"
      :data="attrList"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="属性名称" width="200px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="属性值" min-width="200px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.value }}</span>
        </template>
      </el-table-column>

      <el-table-column label="属性创建时间" width="250px" align="center">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime) }}</span>
        </template>
      </el-table-column>

      <el-table-column label="最近更新时间" width="250px" align="center">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.updateTime) }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils/time'
// import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { fetchObjectById } from '@/api/objects'

export default {
  name: 'FindById',
  // components: { Pagination },
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      attrList: null,
      baseList: null,
      obj: null,
      total: 0,
      objectId: '',
      baseShow: false,
      attrShow: false
    }
  },
  methods: {
    getObject(id) {
      fetchObjectById({ 'id': id }).then(response => {
        this.obj = response.data
        this.getBaseList(response.data)
        this.getAttrList(response.data)
      })
    },
    getBaseList(object) {
      var tmp = []
      tmp.push({ name: '对象ID', value: object.id })
      var type = object.type
      if (type === 'entity') {
        type = '实体'
      } else if (type === 'event') {
        type = '事件'
      } else {
        type = '未知'
      }
      tmp.push({ name: '对象类型', value: type })
      tmp.push({ name: '简介说明', value: object.intro })
      tmp.push({ name: '模板ID', value: object.template })
      tmp.push({ name: '标签ID', value: object.id })
      tmp.push({ name: '关联对象列表', value: object.objects })
      tmp.push({ name: '对象创建时间', value: this.parseTime(object.createTime) })
      tmp.push({ name: '最近更新时间', value: this.parseTime(object.updateTime) })

      this.baseList = tmp
      this.baseShow = true
    },
    getAttrList(object) {
      var tmp = []
      for (var key in object.attr) {
        tmp.push({ name: key, value: object.attr[key].value, createTime: object.attr[key].createTime, updateTime: object.attr[key].updateTime })
      }
      this.attrList = tmp
      this.attrShow = true
    },
    handleFilter() {
      if (this.objectId && this.objectId !== '') {
        this.getObject(this.objectId)
      }
    },
    parseTime(str) {
      return parseTime(str)
    }
  }
}
</script>
