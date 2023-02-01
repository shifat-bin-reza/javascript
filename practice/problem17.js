var studentName = prompt("Enter student name: ");
var studentId = parseInt(prompt("Enter student id: "));
var studentGender = prompt("Enter student gender: ");

var studentList = [];

let studentInfo = {
  name: studentName,
  id: studentId,
  gender: studentGender,
};

studentList.push(studentInfo);

console.log(studentList);
