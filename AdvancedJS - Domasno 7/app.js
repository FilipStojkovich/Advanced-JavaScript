function Academy(name, students, subjects, start, end) {
  this.name = name;
  this.students = students;
  this.subjects = subjects;
  this.start = start;
  this.end = end;
  this.numberOfClasses = this.subjects.length * 10;

  this.printStudents = function () {
    if (this.students.length === 0) console.log("No students assigned yet!");
    for (let student of this.students) {
      console.log(student);
    }
  };
  this.printSubjects = function () {
    for (let subject of this.subjects) {
      console.log(subject);
    }
  };
}

function Subject(title, isElective, students) {
  this.title = title;
  this.numberOfClasses = 10;
  this.isElective = isElective;
  this.academies = [];

  this.addAcademy = function (academyInput) {
    this.students = students;
    this.academies.push(academyInput);
  };
  this.overrideClasses = function (num) {
    if (num <= 3) return (this.numberOfClasses = 10);
    return (this.numberOfClasses = num);
  };
}

function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.academy = null;
  this.currentSubject = [];
  this.completedSubjects = [];

  this.startSubject = function (subject) {
    if (!subject) {
      console.log("Please add a starting subject");
      return;
    }
    if (subject) {
      this.currentSubject.push(subject);
      if (this.currentSubject.length > 1) {
        this.completedSubjects.push(this.currentSubject[1]);
        this.currentSubject.pop();
      }
    }
  };
  this.startAcademy = function (academyInput) {
    return (this.academy = academyInput);
  };
}

function studentInput(studentFirstName, studentLastName, studentAge, subjectTitle, subjectElective, academyName, academyStart, academyEnd) {
  let student = new Student(studentFirstName, studentLastName, studentAge);
  let subject = new Subject(subjectTitle, subjectElective, [student]);
  let academy = new Academy(academyName, [student], [subject], academyStart, academyEnd);
  subject.addAcademy(academy); 
  student.startSubject(subject); 
  student.startAcademy(academy); 

  console.log(academy);
  console.log(subject);
  console.log(student);
}

studentInput("Filip", "Stojkovich", 25, "html", false, "SEDC", "17-10-2022", "17-10-2023");