// https://ko.javascript.info/javascript-specials

var old; // 잘 사용하지 않음.
let user = "John"; // 변수. 재할당 가능.
const pageLoadTime = 1000; // 상수. 재할당 불가.
const COLOR_RED = "#F00";

console.log(1 / 0); // Infinity
console.log(Infinity);

const bigIntWrong = 1234567890123456789012345678901234567890; // 1.2345678901234568e+39
const bigInt = 1234567890123456789012345678901234567890n; // 1234567890123456789012345678901234567890n
console.log(bigIntWrong);
console.log(bigInt);

let str = "Hello";
let phrase = `can embed another ${str}`;
console.log(phrase);

let age = null; // 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다.
let age1; // 'undefined'가 출력됩니다. '값이 할당되지 않은 상태’를 나타낼 때 사용합니다.

console.log(typeof undefined);

typeof Math; // "object"  (1) Math는 수학 연산을 제공하는 내장 객체이므로 "object"가 출력됩니다.

typeof null; // "object"  (2) null은 별도의 고유한 자료형을 가지는 특수 값으로 객체가 아니지만, 하위 호환성을 유지하기 위해 이런 오류를 수정하지 않고 남겨둔 상황입니다.

typeof alert; // "function"  (3) '함수’형은 따로 없습니다. 함수는 객체형에 속합니다. 이런 동작 방식이 형식적으론 잘못되긴 했지만, 아주 오래전에 만들어진 규칙이었기 때문에 하위 호환성 유지를 위해 남겨진 상태입니다.

console.log(Boolean(1)); // 숫자 1(true)
console.log(Boolean(0)); // 숫자 0(false)

console.log(Boolean("hello")); // 문자열(true)
console.log(Boolean("")); // 빈 문자열(false)
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // 공백이 있는 문자열도 비어있지 않은 문자열이기 때문에 true로 변환됩니다.

console.log(2 + 2 + "1"); // '221'이 아니라 '41'이 출력됩니다.
console.log(2 + "1"); // "21" 덧셈 -> 문자열 우선
console.log(6 - "2"); // 4 다른 연산자 -> 숫자 우선

console.log(0 == false); // true, 자동 형변환
console.log(0 === false); // false, 타입까지 비교

console.log(null == undefined); // true
console.log(null < undefined); // false
console.log(null >= undefined); // false

console.log(null > 0); // (1) false. 숫자형 변환
console.log(null == 0); // (2) false. 동등 연산자 ==는 피연산자가 undefined나 null일 때 형 변환을 하지 않습니다.
console.log(null >= 0); // (3) true. 숫자형 변환

console.log(undefined > 0); // false (1) undefined는 비교 불가
console.log(undefined < 0); // false (2) undefined는 비교 불가
console.log(undefined == 0); // false (3) undefined는 비교 불가

// a ?? b의 평가 결과는 다음과 같습니다.
// a가 null도 아니고 undefined도 아니면 a
// 그 외의 경우는 b
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

let height = 0;

console.log(height || 100); // 100 첫 번째 truthy 값을 반환합니다.
console.log(height ?? 100); // 0 첫 번째 정의된(defined) 값을 반환합니다.

let i = 3;
while (i) {
  // i가 0이 되면 조건이 falsy가 되므로 반복문이 멈춥니다.
  console.log(i);
  i--;
}

let ii = 0;
do {
  console.log(ii);
  ii++;
} while (ii < 3);

for (let i = 0; i < 3; i++) {
  // 0, 1, 2가 출력됩니다.
  console.log(i);
}

// switch문은 일치 비교로 조건을 확인합니다. 비교하려는 값과 case문의 값의 형과 값이 같아야 해당 case문이 실행됩니다.
let arg = "3";
switch (arg) {
  case "0":
  case "1":
    console.log("0이나 1을 입력하셨습니다.");
    break;

  case "2":
    console.log("2를 입력하셨습니다.");
    break;

  case 3:
    console.log("이 코드는 절대 실행되지 않습니다!");
    break;
  default:
    console.log("알 수 없는 값을 입력하셨습니다.");
}

let userName = "John";

function showMessage() { // 함수 선언문은 함수 선언문이 정의되기 전에도 호출할 수 있습니다.
  let message = "Hello, " + userName;
  console.log(message);
}
// 자바스크립트는 스크립트를 실행하기 전, 준비단계에서 전역에 선언된 함수 선언문을 찾고, 해당 함수를 생성합니다. 스크립트가 진짜 실행되기 전 "초기화 단계"에서 함수 선언 방식으로 정의한 함수가 생성되는 것이죠.
// 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있습니다. 하지만 블록 밖에서는 함수에 접근하지 못합니다.

showMessage(); // Hello, John

// 함수 호출 시 매개변수에 인수를 전달하지 않으면 그 값은 undefined가 됩니다.

let sayHi = function () { // 함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다. 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있습니다.
  console.log("Hello");
};

console.log(sayHi);
sayHi();




function ask(question, yes, no) {
    if (true) yes() // confirm(question)
    else no();
  }
  
  function showOk() {
    console.log( "동의하셨습니다." );
  }
  
  function showCancel() {
    console.log( "취소 버튼을 누르셨습니다." );
  }
  
  // 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
  ask("동의하십니까?", showOk, showCancel); // 함수 ask의 인수, showOk와 showCancel은 콜백 함수 또는 콜백이라고 불립니다.

  ask(
    "동의하십니까?",
    function() { console.log("동의하셨습니다."); },
    function() { console.log("취소 버튼을 누르셨습니다."); }
  );

  let sum = (a, b) => a + b;
/* 위 화살표 함수는 아래 함수의 축약 버전입니다.

let sum = function(a, b) {
  return a + b;
};
*/

let sum2 = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
    let result = a + b;
    return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 합니다.
  };

let welcome = (age < 18) ?
  () => console.log('안녕') :
  () => console.log("안녕하세요!");

console.log(welcome());
