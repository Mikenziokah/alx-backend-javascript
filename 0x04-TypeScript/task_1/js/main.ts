interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [x: string]: any;
}

//task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

//task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// solution for task 3
interface IStudentClassProps {
  firstName: string;
  lastName: string;
}

// task 4
export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() { return 'Currently working'; }
  displayName() { return this.firstName; }
}

export interface StudentClassInterface {
  readonly firstName: string;
  readonly lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

