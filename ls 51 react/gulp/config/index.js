const fs = require('fs')
const path = './gulp/tasks'
const arrayFiles = fs.readdirSync(path).map(file => `${path}/${file}` )

module.exports = arrayFiles