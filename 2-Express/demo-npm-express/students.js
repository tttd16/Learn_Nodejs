const express = require('express')
const studentRouter = express.Router()

const students = [
    {name: 'Le Tien Dung - student', age: 23},
    {name: 'Nguyen Tuan Anh - student', age: 31},
    {name: 'Trac Pham - student', age: 26},
]

studentRouter.get('/', (req, res) => {
    res.json(students)
})

studentRouter.get('/add', (req, res) => {
    students.push({name:'Ngo Kinh - student', age:23})
    res.json(students)
})

module.exports = studentRouter
