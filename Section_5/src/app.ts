abstract class Department {
  // private id: string;
  // private name: string; //public이 디폴트값
  protected employees: string[] = [];

  //생성자 함수
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    //동일한 이름으로 class가 만들어질 때 property를 생성
  }
  //readonly: TS에만 존재

  static createEmployee(name: string) {
    return { name: name };
  }

  //메서드
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
//es6 - Class 문법 지원

//const accounting = new Department("d1", "Accounting");

// accounting.addEmployee("jwoo");
// accounting.addEmployee("ellie");

//not good -> private 키워드로 보호
//accounting.employees[2] = "anna";
//accounting.name = "NEW_NAME";

//javascript - public, private를 구분하지 않음, TS만이 지원

// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: "marketing", describe: accounting.describe };
// accountingCopy.describe();
//describe 함수 자체를 전달함

//상속
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    //this 키워드 사용전에 호출해 주어야 함
    super(id, "IT");
  }
  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

const employee1 = Department.createEmployee("max");
console.log(employee1);

const it = new ITDepartment("d2", ["jwoo"]);
it.describe();
it.printEmployeeInformation();

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment; //정적 속성, 클래스 자신을 저장

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

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  //정적 메서드
  static getInstance() {
    //클래스 자체에 접근할 수 있게 해줌
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    //인스턴스가 없다면 새로 만들고 반환
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
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

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }
}

//const newAccounting = new AccountingDepartment("d2", []);
const newAccounting = AccountingDepartment.getInstance();

//setter로 접근
newAccounting.mostRecentReport = "year end report";
newAccounting.addReport("report");
//getter로 프로퍼티에 접근
console.log(newAccounting.mostRecentReport);

newAccounting.describe();

//추상 메서드
//-> 추상 클래스 안에서만 선언 가능
//상속 받은 모든 클래스들이 추상 메서드를 정의해야 함.
//추상 클래스는 인스턴스화 될 수 없음

//싱글턴 & 개인 생성자
//-> 클래스에 대해 하나의 인스턴스만 만들 수 있도록
//정적 메서드를 통해 구현