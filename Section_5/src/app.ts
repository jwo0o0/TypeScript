class Department {
  // private id: string;
  // private name: string; //public이 디폴트값
  protected employees: string[] = [];

  //생성자 함수
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    //동일한 이름으로 class가 만들어질 때 property를 생성
  }
  //readonly: TS에만 존재

  static createEmployee(name: string) {
    return { name: name };
  }

  //메서드
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
//es6 - Class 문법 지원

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("jwoo");
accounting.addEmployee("ellie");

//not good -> private 키워드로 보호
//accounting.employees[2] = "anna";
accounting.name = "NEW_NAME";

//javascript - public, private를 구분하지 않음, TS만이 지원

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "marketing", describe: accounting.describe };
// accountingCopy.describe();
//describe 함수 자체를 전달함

//상속
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    //this 키워드 사용전에 호출해 주어야 함
    super(id, "IT");
  }
}

const employee1 = Department.createEmployee("max");
console.log(employee1);

const it = new ITDepartment("d2", ["jwoo"]);
it.describe();
it.printEmployeeInformation();

class AccountingDepartment extends Department {
  private lastReport: string;

  //getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value) {
    if (!value) {
      throw new Error("not a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  //메서드 오버라이딩
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    //private 프로퍼티 - 상속 받은 클래스에서 접근 불가
    //protected 프로퍼티 - 상속 받은 클래스에서 접근 가능
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

const newAccounting = new AccountingDepartment("d2", []);

//setter로 접근
newAccounting.mostRecentReport = "year end report";
newAccounting.addReport("report");
//getter로 프로퍼티에 접근
console.log(newAccounting.mostRecentReport);
