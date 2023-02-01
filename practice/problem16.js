var students = [
  {
    name: "Rashidul Islam",
    id: 3244,
    gender: "Male",
  },

  {
    name: "Rifat Emon",
    id: 3245,
    gender: "Male",
  },

  {
    name: "Nowrin Akter",
    id: 3246,
    gender: "Female",
  },

  {
    name: "Rezaul Karim",
    id: 3247,
    gender: "Male",
  },

  {
    name: "Rina Akter",
    id: 3248,
    gender: "Female",
  },
];

let lateRegi = {
  name: "Rita Akter",
  id: 3250,
  gender: "Female",
};

students.push(lateRegi);
console.log(students);

var k = 0;
for (var i = 0; i < students.length; i++) {
  if (students[i].gender == "Female") {
    console.log(students[i]);
  }
}
