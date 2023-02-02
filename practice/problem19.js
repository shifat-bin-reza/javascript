var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

var size = Object.keys(student).length;
console.log(size);

delete student.sclass;
console.log(student);
