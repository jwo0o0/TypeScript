let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "max";
//unknown 타입
//컴파일 에러 없이 어떤 타입이든 할당할 수 있음
//any와 다른 점?
//unknown이 any보다 더 제한적임

// userName = userInput; 컴파일 에러
if (typeof userInput === "string") {
  userName = userInput;
}
//unknown - 추가적인 타입 검사를 거쳐 사용할 수 있음
//any보다 사용 권장

//never를 반환하는 함수
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("error!", 500);

const result = generateError("error!", 500);
console.log(result);
//console.log가 실행되지 않음
//generateError -> script가 취소됨, 절대 값을 생성하지 않음 = 아무것도 반환하지 않음

//코드 품질의 관점에서 never를 사용해서 아무것도 반환하지 않는다는 것을 명시할 수 있음