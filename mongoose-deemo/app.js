const mongoose = require('mongoose');

// mongodb://${账号}:${密码}@${主机地址}:${容器端口号}/${数据库名称}
mongoose.connect(`mongodb://test:123456@49.235.1.253:27017/testdb`, {
  useNewUrlParser: true, useUnifiedTopology: true
})

// mongoose.model(${集合名称},${文档格式})
const User = mongoose.model('user', { name: String, age: Number, email: String })

// 新建 mongoose 模型对象
const lailailee = new User({
  name: 'lailailee-test',
  age: 23,
  email: '1040481739@qq.com'
})

// 调用save api实现保存到数据库的操作
lailailee.save().then(() => {
  console.log('save Ok!')
})