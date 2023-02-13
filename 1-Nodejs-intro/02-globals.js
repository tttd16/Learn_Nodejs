/*
* 1 . Global object
*- Global ( toan cuc) - moi noi deu co the truy cap vao duoc

**/

console.log('dirname', __dirname);
console.log('dirname', __filename);

function helloWord() {
    console.log('Hello Word !!!');
}

setTimeout(helloWord, 2000)
// setInterval(helloWord, 1000)