// bài 1

// const arr = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10]
// const arr1 = [...new Set(arr)].filter(num => num % 2 === 0)
// console.log(arr1);

// bài 2

// const fs = require('fs');

// fs.readFile('./students.json', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });


// Bài 3


//==================C1==============
// const info = require('./bai3.json');
// let query = Object.entries(info)
//   .map(connect => connect.map(encodeURIComponent).join("="))
//   .join("&");
// console.log(query);

// ===================C2===============
// const info = require('./bai3.json');
// const queryString = require("querystring");
// const query = queryString.stringify(info);
// console.log(query)


// BAI 4

// const myDateModule = require('./moduleDate')
// const myDate = myDateModule.myDate()
// const myDateNew = () => {
//   const birthday = new Date(myDate)
//   const day = birthday.getDate()
//   const month = birthday.getMonth() + 1
//   const year = birthday.getFullYear()
//   return `${day}/${month}/${year}`
// }
// console.log(myDateNew());

// Bai 5 
const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Đây là trang chủ')
    } else if(req.url === '/about') {
        res.end('Lê Tiến Dũng')
    } else {
        res.end('Đường dẫn này không tồn tại')
    }
})

server.listen(5000)