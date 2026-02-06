// 기본

console.log("Hello World");

var a1 = 100;
var a2 = "문자열1";

console.log("a1: %d, a2: %s", a1, a2);
console.log("a1:", a1);
console.log("a1:", a1, "a2:", a2);



// 함수 및 모듈 사용

function f1() {
    console.log("함수 호출");
};

f1();

var second = require("./second.js");

second.f2();

// assert

var assert = require('assert');

var v1 = 10;
var v2 = 10;
var v3 = 30;
var v4 = '10';

assert(v1 < v3);
console.log("v1은 v3보다 작습니다");

// assert(v1 == v3);
// console.log("v1은 v3과 같습니다");


assert(v1 == v2);
console.log("v1은 v2과 같습니다");

// assert(v1 - v2);
// console.log("v1 - v2는 0이 아닙니다");

assert(v1 - v3);
console.log("v1 - v3는 0이 아닙니다");

assert.equal(v1, v2);
console.log("v1은 v2과 같습니다");

// assert.equal(v1, v3);
// console.log("v1은 v3과 같습니다");

assert.equal(v1, v4); // equal은 타입 무시하고 값 비교. true
console.log("v1은 v4과 같습니다");

// assert.strictEqual(v1, v4); // strictEqual 타입과 값 비교. false
// console.log("v1은 v4과 같습니다");

// assert.notEqual(v1, v2);
// console.log("v1은 v2와 다릅니다.");

assert.notEqual(v1, v3);
console.log("v1은 v3와 다릅니다.");

// assert.notEqual(v1, v4);
// console.log("v1은 v4와 다릅니다.");

assert.notStrictEqual(v1, v4);
console.log("v1은 v4와 다릅니다.");

var obj1 = {
    a1: 10,
    a2: 20
};

var obj2 = {
    a1: 10,
    a2: 20
};

var obj3 = {
    a1: 10,
    a2: 30
};

var obj4 = {
    a1: 10,
    a2: '20'
};

assert.deepEqual(obj1, obj2);
console.log("obj1과 obj2는 같습니다.");

// assert.deepEqual(obj1, obj3);
// console.log("obj1과 obj3는 같습니다.");


assert.deepEqual(obj1, obj4);
console.log("obj1과 obj4는 같습니다.");

// assert.deepStrictEqual(obj1, obj4); // 타입도 검사
// console.log("obj1과 obj4는 같습니다.");

// assert.notDeepEqual(obj1, obj2);
// console.log("obj1과 obj2는 다릅니다.");

assert.notDeepEqual(obj1, obj3);
console.log("obj1과 obj3는 다릅니다.");

// assert.notDeepEqual(obj1, obj4);
// console.log("obj1과 obj4는 다릅니다.");

assert.notDeepStrictEqual(obj1, obj4);
console.log("obj1과 obj4는 다릅니다.");
