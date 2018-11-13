"use strict"

const csv = require("fast-csv")

const _makeCSV = (stream, head, body) => {
    return new Promise((resolve) => {
        stream.write(new Buffer('\xEF\xBB\xBF', 'binary'))
        stream.on('finish', () => {
            resolve()
        })
        let csvStream = csv.format({
            headers: true
        }).transform(head)
        csvStream.pipe(stream)
        body.forEach((row)=>{
            csvStream.write(row)
        })
        csvStream.end(() => {})
    })
}

module.exports = {
    name: 'csv',
    MakeCSV: _makeCSV
}