/**

파일에 데이터를 쓰고 읽을 수 있는 기능

 - 비동기식: 명령만 전달하고 넘어감. 이후 콜백 함수에서 처리
 - 동기식: 작업이 완료될 때까지 기다림.

 */

var fs = require("fs");


// 비동기식

fs.writeFile("data1.txt", "Hello node js", function (error) {
  console.log("비동기식 저장1");
});

fs.writeFile("data2.txt", "Hello node js", function (error) {
  console.log("비동기식 저장2");
});

fs.appendFile("data1.txt", "안녕하세요", function (error) {
  console.log("비동기식 추가1");
});

fs.appendFile("data2.txt", "반갑습니다", function (error) {
    console.log("비동기식 추가2");
  });

fs.readFile("data1.txt", function (error, data) {
  console.log("data1:", data.toString());
});

fs.readFile("data2.txt", function (error, data) {
  console.log("data2:", data.toString());
});


// 동기식
fs.writeFileSync("data3.txt", "hello node js"); // 콜백 함수 등록하지 않음. 끝날 때까지 대기함.
console.log("동기식 저장 1");

fs.writeFileSync("data4.txt", "hello node js"); // 콜백 함수 등록하지 않음. 끝날 때까지 대기함.
console.log("동기식 저장 2");

fs.appendFileSync("data3.txt", "냠냠"); // 콜백 함수 등록하지 않음. 끝날 때까지 대기함.
console.log("동기식 추가 1");

fs.appendFileSync("data4.txt", "챱챱"); // 콜백 함수 등록하지 않음. 끝날 때까지 대기함.
console.log("동기식 추가 2");

var data3 = fs.readFileSync("data3.txt");
console.log("data3:", data3.toString());

var data4 = fs.readFileSync("data4.txt");
console.log("data4:", data4.toString());
