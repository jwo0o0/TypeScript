// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuple type
// } = {
//   name: "jwoo",
//   age: 24,
//   hobbies: ["cooking", "reading"],
//   role: [2, "author"],
// };

//5, 6, 7
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "jwoo",
  age: 24,
  hobbies: ["cooking", "reading"],
  role: Role.ADMIN,
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}

//객체 타입
//키 - 타입 쌍
//어딘가에서 사용되는 객체 타입을 설명하기 위해 작성되는 것
//객체 타입의 타입스크립트 표현일 뿐 실제 객체가 아님

//튜플
//길이가 고정된 특수 배열, TS에서 추가됨
//배열의 길이, 타입까지 미리 지정

//Enum
//ex) enum { NEW, OLD }

//any
//모든 타입 가능
