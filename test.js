"use strict"

const fs = require("fs")
const csv = require("./index")

let stream = fs.createWriteStream("./temp.csv")
let head = (row) => {
    return {
        "日期": row.day,
        "uid": row.uid
    }
}
let body = [{
    day: "a",
    uid: 1
}, {
    day: "b",
    uid: 2
}, {
    day: "c",
    uid: 3
}, {
    day: "d",
    uid: 4
}, ]

csv.MakeCSV(stream, head, body).then(()=>{
    console.log("生成完毕")
})