//union 타입 사용
//런타임 타입 검사가 필요하기도 함

//타입 앨리어스
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineNames = combine("jwoo", "ellie", "as-text");
console.log(combineNames);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);
