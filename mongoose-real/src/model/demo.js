import User from './test'

//增
const user = {
  name: 'lailailee',
  age: 23,
  email: "laialile97@qq.com"
}

const insertRun = async () => {
  const data = new User(user)
  const result = await data.save()
  console.log(result)
}
// insertRun()
//查
const findRun = async () => {
  const result = await User.find()
  console.log(result)
}
// findRun()
//改
const updateRun = async () => {
  const result = await User.updateOne({ name: 'lailailee' }, { email: '1111111@qq.com' })
  console.log(result)
}
// updateRun()
//删
const deleteRun = async () => {
  const result = await User.deleteOne({ name: 'lailailee' })
  console.log(result)
}
// deleteRun()