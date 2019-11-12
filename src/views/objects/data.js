import { builtinModules } from 'module'

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

module.exports = {
  obj: obj,
  baseList: baseList,
  attrsList: attrsList
}
