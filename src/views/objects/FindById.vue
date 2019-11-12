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
      v-if="baseShow"
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
      v-if="attrShow"
      :key="tableKey"
      :data="attrsList"
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

var obj = {
  id: '1',
  intro: 'test2',
  type: 'entity',
  template: '1',
  nodeId: '1',
  objects: {},
  attr: {
    name: {
      value: 'yinmeng',
      createTime: '2019-11-07T17:07:07.012+08:00',
      updateTime: '2019-11-07T17:07:07.012+08:00'
    },
    id: {
      value: '',
      createTime: '2019-11-07T17:07:07.021+08:00',
      updateTime: '2019-11-07T17:07:07.021+08:00'
    }
  },
  createTime: '2019-11-07T17:07:07.023+08:00',
  updateTime: '2019-11-07T17:07:07.023+08:00'
}

var baseList = [
  {
    name: 'id',
    value: '1'
  },
  {
    name: 'intro',
    value: '123sdlkdsldkmsmklklmlk'
  }
]

var attrsList = [
  {
    name: 'id',
    value: '6',
    createTime: '2019-11-08T07:53:43.087+0000',
    updateTime: '2019-11-08T07:53:43.087+0000'
  },
  {
    name: 'name',
    value: 'abc',
    createTime: '2019-11-08T07:53:43.087+0000',
    updateTime: '2019-11-08T07:53:43.087+0000'
  },
  {
    name: 'intro',
    value: 'sjtu.edu.cn',
    createTime: '2019-11-08T07:53:43.087+0000',
    updateTime: '2019-11-08T07:53:43.087+0000'
  }
]

export default {
  name: 'FindById',
  // components: { Pagination },
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      attrsList: attrsList,
      baseList: baseList,
      obj: obj,
      total: 0,
      objectId: '',
      baseShow: false,
      attrShow: false
    }
  },
  methods: {
    getObject() {
    },
    getAttrList() {
    },
    getBaseList() {
    },
    handleFilter() {
    },
    parseTime(str) {
      return parseTime(str)
    }
  }
}
</script>
