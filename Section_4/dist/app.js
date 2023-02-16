"use strict";
const hobbies = ["sports", "cooking"];
const activeHobbies = ["Hiking", ...hobbies];
const person = {
    username: "jwoo",
    age: 24,
};
//rest parameter
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
//배열 및 객체 destructure
const [hobby1, hobby2] = hobbies;
console.log(hobby1);
const { username: firstName, age } = person;
console.log(firstName, age);
//배열 - 인덱스 순서로 추출
//객체 - 프로퍼티 키로 추출
//원본 객체 및 배열을 변경하지 않음
