import { getValue, setValue, getHValue, delValue } from './RedisConfig'

setValue('lailailee', "lailailee 3213 lalalalallala")

getValue('lailailee').then(res => {
  console.log(res)
})

setValue('lailaileeObj', { name: 'lailailee', age: 22, email: "lailailee@qq.com" })

getHValue('lailaileeObj').then(res => {
  console.log(JSON.stringify(res, null, 2))
})

delValue('lailailee')