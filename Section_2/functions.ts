function add(n1: number, n2: number) {
  return n1 + n2;
}
//함수
//TS가 자동으로 return type을 추론
//return type을 명시적으로 할당할 수도 있음
//return type을 굳이 명시해야할 이유가 없다면 안하는게 좋음.

function printResult(num: number) {
  console.log("result: " + num);
}

function printResult2(num: number): undefined {
  console.log("result: " + num);
  return;
} //의도적으로 undefined를 반환해야할 때는 이렇게 지정할 수 있음

printResult(add(5, 12));

//JS와는 다르게 TS 함수는 void 타입을 반환할 수 있음.
//JS에서 이는 undefined로 처리됨.
//TS에서 undefined와 void는 각각 다른 타입임.
//함수가 아무것도 반환하지 않는다면 void를 사용해야 함

let combineValues;

combineValues = add;
combineValues = 5;

console.log(combineValues(8, 8));
//위와 같은 경우 TS가 에러를 추론할 수 없지만 runtime에러가 발생
// -> 함수 타입을 지정 가능

let combineValues2: Function;

combineValues2 = add;
combineValues2 = printResult;

console.log(combineValues2(8, 8));
//함수의 argument가 다름 -> 마찬가지로 runtime 에러 발생

//화살표 함수 형식으로 Fucntion 타입 지정 가능
let combineValues3: (a: number, b: number) => number;

combineValues3 = add;
//combineValues3 = printResult; 컴파일 에러 발생
console.log(combineValues3(8, 8));

//callback 함수
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
//callback 함수가 void를 return 해야한다고 명시함
//-> 에러는 없지만 return문을 무시하고 값을 반환하는 작업을 수행하지 않음
//매개변수는 명시한대로 입력해야 함. 아니면 에러 발생
