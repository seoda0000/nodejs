/**
- 기억공간을 동적으로 만듬
- 데이터를 1바이트씩 분리해 저장
 */

var buf1 = Buffer.alloc(10); // 10바이트짜리 기억 공간을 만들고 0으로 초기화.
console.log(buf1); // <Buffer 00 00 00 00 00 00 00 00 00 00>

var buf1 = Buffer.allocUnsafe(10); // 10바이트짜리 기억 공간을 만듬
console.log(buf1); // <Buffer 00 00 10 00 00 00 01 00 03 02>

var size1 = Buffer.byteLength(buf1); // 버퍼의 용량(바이트)
console.log("size1 :", size1); // 10

console.log("bytes :", buf1.length); // 10

var buf3 = Buffer.from('abcd'); // 지정된 값을 관리하는 기억공간을 만든다.
var buf4 = Buffer.from('안녕하세요');
console.log(buf3); // <Buffer 61 62 63 64>
console.log(buf4); // <Buffer ec 95 88 eb 85 95 ed 95 98 ec 84 b8 ec 9a 94>

// compare: 두 기억공간을 비교

var buf5 = Buffer.from('cccc');
var buf6 = Buffer.from('cccc');
var buf7 = Buffer.from('aaaa');
var buf8 = Buffer.from('dddd');

var v1 = Buffer.compare(buf5, buf6);
console.log("v1: ", v1); // 0

var v2 = Buffer.compare(buf5, buf7);
console.log("v2: ", v2); // 1

var v3 = Buffer.compare(buf5, buf8);
console.log("v3: ", v3); // -1

// concat: 배열 안의 모든 버퍼를 하나로 합쳐 새로운 버퍼를 만든다.
var array1 = [buf5, buf6, buf7, buf8]
var buf9 = Buffer.concat(array1);
console.log(buf9); // <Buffer 63 63 63 63 63 63 63 63 61 61 61 61 64 64 64 64>

var buf10 = Buffer.from('123456789');
var buf11 = Buffer.alloc(10);
buf10.copy(buf11, 0, 2, 5); // buf11의 0 인덱스부터 buf10의 2~4인덱스 담기
console.log(buf10); // <Buffer 31 32 33 34 35 36 37 38 39>
console.log(buf11); // <Buffer 33 34 35 00 00 00 00 00 00 00>

var array2 = buf5.entries(); // 버퍼의 내용을 [인덱스, 값] 형태의 객체로 만들어 가지고 있는 배열을 반환한다.
for (var str of array2){
    console.log(str);
}
// [ 0, 99 ]
// [ 1, 99 ]
// [ 2, 99 ]
// [ 3, 99 ]

var buf11 = Buffer.from('abcd');
var buf12 = Buffer.from('abcd');
var buf13 = Buffer.from('zzzz');

var v4 = buf11.equals(buf12);
console.log("v4: ", v4); // true

var v5 = buf11.equals(buf13);
console.log("v5: ", v5); // false

var buf14 = Buffer.from('aaaaa');
console.log(buf14); // <Buffer 61 61 61 61 61>
buf14.fill('c');
console.log(buf14); // <Buffer 63 63 63 63 63>
buf14.fill('abc');
console.log(buf14); // <Buffer 61 62 63 61 62>

var buf15 = Buffer.from("hello node node");
var v6 = buf15.includes("node");
console.log("v6: ", v6); // true
var v7 = buf15.includes("apple");
console.log("v7: ", v7); // false

var v8 = buf15.indexOf("node"); // 가장 앞의 인덱스 찾기
console.log("v8: ", v8); // 6

var v9 = buf15.indexOf("apple");
console.log("v9: ", v9); // -1

var v10 = buf15.lastIndexOf("node"); // 가장 뒤의 인덱스 찾기
console.log("v10: ", v10); // 6

var v11 = Buffer.isBuffer(buf15);
console.log("v11: ", v11); // true

var array3 = buf15.keys();
for (var i of array3) {
    console.log(i); // 0, 1, 2, 3, ...14
};

var v13 = buf15.toString();
console.log(v13); // hello node node
