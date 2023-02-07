var person = {
    name: "jwoo",
    age: 24,
    hobbies: ["cooking", "reading"],
    role: [2, "author"]
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
//객체 타입
//키 - 타입 쌍
//어딘가에서 사용되는 객체 타입을 설명하기 위해 작성되는 것
//객체 타입의 타입스크립트 표현일 뿐 실제 객체가 아님
//튜플
//길이가 고정된 특수 배열, TS에서 추가됨
//배열의 길이, 타입까지 미리 지정
