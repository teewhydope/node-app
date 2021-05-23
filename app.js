// const names = require('./4-names')
// const sayHi = require('./util')
// const os = require('os')


// sayHi("hi")
// sayHi(names.tee)
// sayHi(names.why)

//console.log(`The system uptime is ${os.uptime() / 3600} hours`)

const _ = require('lodash')

const items = [1,[2,[3,[4,[5]]]]]

const newItems = _.flattenDeep(items)

console.log(newItems);