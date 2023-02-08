//union 타입 사용
//런타임 타입 검사가 필요하기도 함
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 26, "as-number");
console.log(combineAges);
var combineNames = combine("jwoo", "ellie", "as-text");
console.log(combineNames);
var combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);
