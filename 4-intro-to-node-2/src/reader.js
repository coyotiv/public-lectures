const fs = require('fs')

exports.read = (reportName, callback) => {
  fs.readFile(`./reports/${reportName}.json`, 'utf-8',
    (err, data) => {
      callback(JSON.parse(data))
    })
}
