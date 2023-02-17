"use strict";
class Department {
    //생성자 함수
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    //메서드
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
//es6 - Class 문법 지원
const accounting = new Department("Accounting");
accounting.addEmployee("jwoo");
accounting.addEmployee("ellie");
//not good - private 키워드로 보호
//accounting.employees[2] = "anna";
accounting.name = "NEW_NAME";
//javascript - public, private를 구분하지 않음, TS만이 지원
accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = { name: "marketing", describe: accounting.describe };
// accountingCopy.describe();
//describe 함수 자체를 전달함
