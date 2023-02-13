// const jsonExport = require('jsonexport')

// const members = [
//     {
//         name:'Le Tien Dung',
//         age:'23'
//     }, 
//     {
//         name:'Nguyen Tuan Anh',
//         age:'31'
//     }
// ]

// jsonExport(members, function (error, csv) {
//     if(error) return console.log(error)
//     console.log(csv)
// })

const express = require('express')
const app = express()

const teacherRouter = require('./teachers')
const studentRouter = require('./students')

app.use('/teacher', teacherRouter)
app.use('/student', studentRouter)


const port = 3000

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})