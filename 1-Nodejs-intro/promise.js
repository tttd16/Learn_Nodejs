console.log('promise file');

const promisePending = new Promise((resolve, reject) => {

})

console.log('1 trang thai promise khi khoi tao', promisePending);

const  promisFullfilled = new Promise((resolve, reject) => {
    resolve();
})

console.log("2. trang thai cua promise khi resolve", promisFullfilled);

const promiseReject = new Promise((resolve, reject) => {
    reject('co loi xay ra')
})

console.log("3. trang thay cua promise khi reject duoc goi ", promiseReject);

const promiseWithData= new Promise((resolve, reject) => {

    const membetLists = [
        {
            'name': 'LE tien Dungx',
            'age': '23'
        },
        {
            'name': 'Lss',
            'age': '23'
        }
    ]

    resolve(membetLists)
})

console.log('4. trang thai cua Promise khi resolve duoc goi va co value tra ve', promiseWithData);

promiseWithData
    .then(function(data) {
        console.log('5. Data get khi fullfilled - resolve duoc call', data)
    })
    .catch(function () {
        console.log('6.Data get khi rejectes - reject duoc call');
    })
    .finally(function () {
        console.log('7. khi thanh cong va that bai!!');
    })