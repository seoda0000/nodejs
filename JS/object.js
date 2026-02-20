const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer); // 입력받은 값을 resolve
    });
  });
}

let user1 = new Object(); // '객체 생성자' 문법
let user2 = {}; // '객체 리터럴' 문법

const user = {
  // 객체. const로 정의해도 수정 가능하다. 전체 재설정만 불가능.
  name: "John", // 키: "name",  값: "John"
  age: 30, // 키: "age", 값: 30
  "likes birds": true, // 복수의 단어는 따옴표로 묶어야 합니다.
};

user.isAdmin = true;
user["likes birds"] = true;
delete user.age;

async function askFruitAndMakeBag() {
  try {
    // 사용자에게 과일 종류를 물음
    const fruit = await ask("어떤 과일을 구매하시겠습니까? ");
    console.log(`입력 받은 값:  `);

    // ③ 입력값을 동적 키로 사용해 객체 생성
    const bag = {
      [fruit]: 5, // 5개를 담았다
    };

    // ④ 결과 출력
    console.log("구매된 과일과 개수:", bag);
    console.log(`bag[" "] =`, bag[fruit]); // 동적 접근 예시
  } finally {
    // ⑤ 인터페이스 종료
    rl.close();
  }
}

//askFruitAndMakeBag();

function makeUser(name, age) {
  return {
    name: name,
    age: 30,
    // ...등등
  };
}

function makeUser2(name, age) {
  return {
    name,
    age,
    // ...등등
  };
}

let user3 = makeUser2("John", 30);
console.log(user3.name); // John
console.log("age" in user3); // true

let obj = {
  test: undefined,
};

console.log(obj.test); // 값이 `undefined`이므로, 얼럿 창엔 undefined가 출력됩니다. 그런데 프로퍼티 test는 존재합니다.

console.log("test" in obj); // `in`을 사용하면 프로퍼티 유무를 제대로 확인할 수 있습니다(true가 출력됨).

for (let key in user) {
  console.log(`${key} - ${user[key]}`); // 프로퍼티는 정수면 작은 순서대로, 정수가 아니면 입력한 순서대로
}

let a = {};
let b = {}; // 독립된 두 객체

console.log(a == b); // false
console.log(a === b); // false

// 자바스크립트는 도달 가능성(reachability) 이라는 개념을 사용해 메모리 관리를 수행합니다.
// 어떻게든 접근하거나 사용할 수 있는 값

let user4 = {};

user4.sayHi = function () {
  console.log("안녕하세요!");
};

user4 = {
  sayHi: function () {
    console.log("Hello");
  },
};

user4 = {
  sayHi() {
    // "sayHi: function()"과 동일합니다.
    console.log("Hello");
  },
};

user4.sayHi(); // 안녕하세요!

user4 = {
  name: "John",
  age: 30,

  sayHi() {
    // 'this'는 '현재 객체'를 나타냅니다.
    console.log(this.name);
  },
};

user4.sayHi(); // John

let user5 = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log(this.name);
}

// 별개의 객체에서 동일한 함수를 사용함
user5.f = sayHi;
admin.f = sayHi;

// 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
// this 값이 달라짐
user5.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
sayHi(); // undefined

// 자바스크립트에서 this는 런타임에 결정됩니다. 메서드가 어디서 정의되었는지에 상관없이 this는 ‘점 앞의’ 객체가 무엇인가에 따라 ‘자유롭게’ 결정됩니다.

let user6 = {
  firstName: "보라",
  sayHi() {
    let arrow = () => console.log(this.firstName); // 화살표 함수는 일반 함수와는 달리 ‘고유한’ this를 가지지 않습니다. 화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 ‘평범한’ 외부 함수에서 this 값을 가져옵니다.
    arrow();
  },
};

user6.sayHi(); // 보라

let user7 = {
  firstName: "보라",
  sayHi() {
    function func() {
      console.log(this.firstName);
    } // 일반 함수는 점 앞의 객체 참조
    func();
  },
};

user7.sayHi(); // undefined. 점 앞의 객체가 없으니까.

// chainging

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    console.log(this.step);
  },
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep(); // 1

function User(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  this.name = name;
  this.isAdmin = false;

  // return this;  (this가 암시적으로 반환됨)
}

let user8 = new User("보라");

console.log(user8.name); // 보라
console.log(user8.isAdmin); // false

let user9 = new (function () {
  // 익명 생성자 함수. 재사용 불가.
  this.name = "John";
  this.isAdmin = false;
})();

// 옵셔널 체이닝
// ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.

let user10 = {}; // 주소 정보가 없는 사용자

console.log(user10?.address?.street); // undefined, 에러가 발생하지 않습니다.
console.log(user10?.["address"]?.street);

// ?.는 존재하지 않아도 괜찮은 대상에만 사용해야 합니다.
// ?.앞의 변수는 꼭 선언되어 있어야 합니다.
// ?.은 읽기나 삭제하기에는 사용할 수 있지만 쓰기에는 사용할 수 없습니다.

user6?.sayHi();

// symbol
// '심볼(symbol)'은 유일한 식별자(unique identifier)를 만들고 싶을 때 사용합니다.
let id = Symbol("id");
console.log(id.toString()); // Symbol(id)

let user11 = {
  // 서드파티 코드에서 가져온 객체
  name: "John",
};

user11[id] = 1;
console.log(user11[id]); // 1 - 전용 식별자

// 전역 레지스트리에서 심볼을 읽습니다.
let id1 = Symbol.for("id"); // 심볼이 존재하지 않으면 새로운 심볼을 만듭니다.

// 동일한 이름을 이용해 심볼을 다시 읽습니다(좀 더 멀리 떨어진 코드에서도 가능합니다).
let id2 = Symbol.for("id");

// 두 심볼은 같습니다.
console.log(id1 === id2); // true
console.log(id === id2); // false. 로컬 심볼과 전역 심볼은 별개.
