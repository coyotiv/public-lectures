const fs = require('fs')

exports.print = contents => {
  console.log('printing...')

  fs.writeFileSync('./reports/balance-sheet-2.json', JSON.stringify(contents, null, 2))

  console.log('printing completed.')
}
