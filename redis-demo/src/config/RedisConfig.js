import redis from 'redis'
import { promisifyAll } from 'bluebird'

const options = {
  host: '49.235.1.253',
  port: 15001,
  password: '123456',
  detect_buffers: true,
  retry_strategy: function (options) {
    if (options.error && options.error.code === 'ECONNREFUSED') {
      // End reconnecting on a specific error and flush all commands with
      // a individual error
      return new Error('The server refused the connection');
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      // End reconnecting after a specific timeout and flush all commands
      // with a individual error
      return new Error('Retry time exhausted');
    }
    if (options.attempt > 10) {
      // End reconnecting with built in error
      return undefined;
    }
    // reconnect after
    return Math.min(options.attempt * 100, 3000);
  }
}

const client = promisifyAll(redis.createClient(options))

client.on('error', err => {
  console.log('redis error:' + err)
})

const setValue = (key, value) => {
  if (typeof value === undefined || value == null || value == '') {
    return
  }
  if (typeof value === 'string') {
    client.set(key, value)
  } else if (typeof value === 'object') {
    Object.keys(value).forEach((item) => {
      client.hset(key, item, value[item], redis.print)
    })
  }
}

// const { promisify } = require('util');

const getValue = (key) => {
  // return promisify(client.get).bind(client)(key)
  return client.getAsync('foo')
}

const getHValue = (key) => {
  // return promisify(client.hgetall).bind(client)(key)
  return client.hgetallAsync('foo')
}

const delValue = (key) => {
  client.del(key, (err, res) => {
    if (res === 1) {
      console.log('delete successfully')
    } else {
      console.log('delete error:' + err)
    }
  })
}

export {
  client,
  setValue,
  getValue,
  getHValue,
  delValue
}