// 引入mockjs，好用的模拟数据，比如占位图，随机颜色，数组等等，使用方法：http://mockjs.com/0.1/#%E7%94%A8%E6%B3%95
/* eslint-disable */ 
const Mock = require('mockjs');
/* eslint-disable */ 
const obj = {'aa':'11', 'bb':'22', 'cc':'33', 'dd':'44'};
/* eslint-disable */ 
const Random = Mock.Random;
//这里的url地址其实可以换成一个字段，比如msg,下边请求时候对应就可以
/* eslint-disable */ 
Mock.mock(process.env.VUE_APP_MOCKURL + '/test/list','post', {
  'data|1-2':[{
    'title':'@title',
    'article':'@csentence'
    }]
});
/* eslint-disable */ 
Mock.mock(process.env.VUE_APP_MOCKURL + '/test/list', {
  "data|1-10": [{   // 随机生成1到3个数组元素
      'name': Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      'id|+1': 88,    // 属性值自动加 1，初始值为88
      'title': Random.csentence(5, 30), //  Random.csentence( min, max )
      'coverUrl': Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
      'birthday': '@date("yyyy-MM-dd")',  // 日期
      'city': '@city(true)',   // 中国城市
      'color': '@color',  // 16进制颜色
      'isMale|1': true,  // 布尔值
      'isFat|1-2': true,  // true的概率是1/3
      'fromObj|2': obj,  // 从obj对象中随机获取2个属性
      'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
      'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
      'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
      'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
  }]
});