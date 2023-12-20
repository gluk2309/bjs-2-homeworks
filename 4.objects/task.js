function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

}

let student3 = new Student('Сергей', 'male', 25);
let student4 = new Student('Виктория', 'female', 18);
let student5 = new Student('Александр', 'male', 20);


Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
  if (!this.excluded && this.hasOwnProperty('marks')) {
      this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function() {
  if (typeof this.marks === "undefined" || this.marks.length === 0) {
      return 0;
  }
  return this.marks.reduce((acc, item, index, marks) => acc + item / marks.length, 0);
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}