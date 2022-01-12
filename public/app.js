// What is the difference between Data & Information ?
// 999 Data
// qty = 999 information

// var student = {
//   name: "Muhammad Ali",
//   fatherName: "Ahmed",
//   age: 16,
//   contact: "0307456146",
//   hobbies: ["a", "b", "c"],
//   address: {
//     country: "Pakistan",
//     city: "Karachi",
//     area: "Hussainabad",
//   },
// };

// student.fatherName = "Abdul Rehman";
// student.institute = "SAIMS";
// delete student.contact;

// var a = "name" in student;
// console.log(a)

// console.log(student);

var studentinformation1 = {
  name: "Arsalan",
  fatherName: "Sohail",
  age: 16,
  result: "Pass",
};

var studentinformation2 = {
  name: "Muhammad Ali",
  fatherName: "Ahmed",
  age: 12,
  result: "Pass",
};

var studentinformation3 = {
  name: "Muhammad Owais",
  fatherName: "Arsalan",
  age: 14,
  result: "Pass",
};

var studentinformation4 = {
  name: "Tahir",
  fatherName: "Farooq",
  age: 19,
  result: "Fail",
};

var studentinformation5 = {
  name: "Muhammad Taha",
  fatherName: "Hassnain",
  age: 10,
  result: "Fail",
};

var studentList = [
  studentinformation1,
  studentinformation2,
  studentinformation3,
  studentinformation4,
  studentinformation5,
];

var val = document.getElementById("all");

for (var i = 0; i < studentList.length; i++) {
  studentList[i].rollNo = i + 1;
}

for (var i = 0; i < studentList.length; i++) {
  var obj = studentList[i];
  val.innerHTML +=
    "<tr><td>" +
    obj.name +
    "</td><td>" +
    obj.fatherName +
    "</td><td>" +
    obj.age +
    "</td><td>" +
    obj.rollNo +
    "</td><td>" +
    obj.result +
    "</td></tr>";
}
// console.log(studentList);

var stdresult1 = document.getElementById("stdresult1");
var result = document.getElementById("stdresult");

function stdchck() {
  for (var i = 0; i < studentList.length; i++) {
    var check = studentList[i];
    if (result.value == check.rollNo) {
      stdresult1.innerHTML =
        "<tr><td>" +
        check.name +
        "</td><td>" +
        check.fatherName +
        "</td><td>" +
        check.age +
        "</td><td>" +
        check.rollNo +
        "</td><td>" +
        check.result +
        "</td></tr>";
    }
  }
}
