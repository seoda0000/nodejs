/**

Global 모듈은 node.js 프로그램이 실행되면 자동으로 만들어지는 모듈 객체


 */

console.log("__dirname:", __dirname); // 현재 실행 중인 파일 경로
console.log("__filename:", __filename); // 현재 실행 중인 파일 경로 + 파일명

console.log("node.js 코드입니다.");
setImmediate(function(){ // 모든 작업 완료 후 실행
    console.log("Immediate 동작 1");
});
console.log("node.js 코드입니다.");
var a1 = setImmediate(function(){ 
    console.log("Immediate 동작 2");
});

console.log("node.js 코드입니다.");

clearImmediate(a1); // 작업 취소
console.log("작업이 모두 완료되었습니다");

var a1 = 0;
var a2 = setInterval(function(){
    console.log("interval 동작");
    a1++;
    console.log("a1: ", a1);
    if (a1 >= 5) {
        clearInterval(a2);
    }

}, 1000);



var a1 = setTimeout(function(){
    console.log("timeout 동작");
}, 1000);

clearTimeout(a1);
