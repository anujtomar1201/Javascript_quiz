// What  is map?

const arr = [1, 2, 3, 4];

const mapArr = arr.map((num, i, arofe) => {
  return num * 4 + i;
});

console.log(mapArr);

//What is filter?

const arr = [12.45, 113, 344, 123, 54, 34, 23, 32];

const filteredArray = arr.filter((num) => {
  return num > 100;
});

console.log(filteredArray);

// what is reduce ?

const arr = [10, 70, 40, 30, 10];

const reduce = arr.reduce((acc, curr, i, ar) => {
  return acc + curr;
}, 0);

console.log(reduce);

//For each

const arr = [10, 70, 40, 30, 10];

arr.forEach((num, i) => {
  arr[i] = num + 3;
});

console.log(arr);

// Solve the following questions based on the object value given?

let StudentData = [
  { name: "Anuj Tomar", Rollnum: 31, marks: 80 },
  { name: "Lavee Taneja ", Rollnum: 15, marks: 69 },
  { name: "Lakshay Tomar", Rollnum: 16, marks: 55 },
  { name: "Raghav Taneja", Rollnum: 14, marks: 38 },
];

// (i) Return only names in capital letters.

let namesInCapital = StudentData.map((stu, i, arr) => {
  return stu.name.toUpperCase();
});
console.log(namesInCapital);

// (ii) Return the details of those who only scored more than 60.

let details = StudentData.filter((student) => {
  return student.marks > 60;
});

console.log(details);

// (iii) Return only names of students who scored more than 60?

let details = StudentData.filter((student) => {
  return student.marks > 60;
}).map((student, i, arr) => {
  return student.name;
});

console.log(details);

// (iv) Return sum of marks of all students.

let sumMarks = StudentData.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);

console.log(sumMarks);

// (v) Console log the sum of students who have more than 60 marks after adding 20 marks as grace who scored below 60.

let StuMarks = StudentData.map((stu, i, arr) => {
  if (stu.marks < 60) {
    stu.marks += 20;
  }
  return stu;
})
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(StuMarks);
