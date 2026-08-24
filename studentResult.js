//-----------------------------Student Details-----------------------------
var stuName = "Bhuvnesh";
let age = 23;
const rollNo = 111;

let course = "HTML";
let attendance = 80;
let isPresent = true;

//-----------------------Student Details Output with typeof-----------------------------

console.log("Name: " + stuName + " Typeof: " + typeof stuName);
console.log("Age: " + age + " Typeof: " + typeof age);
console.log("RollNo: " + rollNo + " Typeof: " + typeof rollNo);
console.log("Course: " + course + " Typeof: " + typeof course);
console.log("Attendence: " + attendance + " Typeof: " + typeof attendance);
console.log("Present: " + isPresent + " Typeof: " + typeof isPresent);

//---------------------------Marks-----------------------

var marks = [{ js: 79 }, 
  { html: 84 }, 
  { css: 81 }, 
  { db: 71 },
   { comm: 78 }];

let js = marks[0].js;
let html = marks[1].html;
let css = marks[2].css;
let db = marks[3].db;
let comm = marks[4].comm;

function calculateTotal() {
  //   for(i=0; i<marks.length; i++){
  //     const totalMarks= marks[i].js + marks[i+1].html + marks[i+2].css + marks[i+3].db + marks[i+4].comm;

  let totalMarks = js + html + css + db + comm;

  return totalMarks;
}

console.log("Total Marks: " + calculateTotal());

//--------------------------Percentage------------------------

function calculatePer() {
  var percentage = ( calculateTotal() / 500) * 100;

  return percentage;
}

console.log("Percentage : " + calculatePer() + "%");

//-------------------------Grade---------------------------

function calculateGrade(percentage) {
  if (percentage >= 90) {
    return "A+";
  } else if (percentage >= 80) {
    return "A";
  } else if (percentage >= 70) {
    return "B";
  } else if (percentage >= 60) {
    return "C";
  } else if (percentage >= 45) {
    return "D";
  } else {
    return "F";
  }
}
calculateGrade(calculatePer());

// // //-----------------------------------Result-----------------------------------

function checkResult() {
  let percentage = calculatePer(calculateTotal());

  if (
    percentage >= 40 &&
    js >= 35 &&
    html >= 35 &&
    css >= 35 &&
    db >= 35 &&
    comm >= 35
  ) {
    return "PASS";
  } else {
    return "FAIL";
  }
}
let result = checkResult();
console.log("Result: " + result);


//------------------------Attendance Status----------------------------
function attendanceStatus() {
  if (attendance >= 90) {
    return "Excellent";
  } else if (attendance >= 80) {
    return "Very Good!";
  } else if (attendance >= 70) {
    return "Good!";
  } else if (attendance >= 60) {
    return "Low!";
  } else {
    return "Very Low!";
  }
}

console.log("Attendance Status: " + attendanceStatus());

// // // //--------------------Exam Permission ----------------------------

let examEligibility = attendance >= 75 ? "Allowed" : "Not Allowed";

console.log("Exam Eligibility: " + examEligibility);

// // // //---------------------Certificate Eligibility-----------------------

let certificateEligibility =
  calculatePer() >= 75 && attendance >= 75 && result === "PASS"
    ? "Eligible"
    : "Not Eligible";

console.log("Certificate Eligibility: " + certificateEligibility);

//--------Course Details-----------------

function courseDetails(course) {
  switch (course) {
    case "JavaScript":
      return "JavaScript is web-based programming lanaguage which is used to create dyanamic and interactable web page.";

    case "HTML":
      return "HTML is language which used for creating structure of a web page.";

    case "CSS":
      return "CSS is the language which is used to add styling in web page.";

    case "DataBase":
      return "Database is used for storing and managing data.";

    case "Communication":
      return "Communication is important for communicate with the team.";

    default:
      return "No Course Found!";
  }
}

console.log("Course Details: " + courseDetails(course));

//-----------Function expresssion---------

const displayStudent = function (stuname, age, rollNo) {
  console.log("Student Name: " + stuname);

  console.log("Student Age: " + age);

  console.log("Student RollNo: " + rollNo);
};

displayStudent(stuName, age, rollNo);

//----------------Arrow Function-------------
const checkPass = (percentage) => {
  return percentage >= 40 ? "PASS" : "FAIL";
};

console.log(
  "Arrow Function Result: " + checkPass(calculatePer(calculateTotal())),
);

//---------------For loop------------------------
for (let i = 0; i < marks.length; i++) {
  console.log("Subject " + (i + 1));
  console.log(marks[i]);
}

//----------------For loop---------------------
for (let i = 1; i <= 5; i++) {
  if (i === 1) {
    console.log("JavaScript: " + js);
  } else if (i === 2) {
    console.log("HTML: " + html);
  } else if (i === 3) {
    console.log("CSS: " + css);
  } else if (i === 4) {
    console.log("Database: " + db);
  } else {
    console.log("Communication: " + comm);
  }
}

//-------------------While loop---------------------

let attempt = 1;

while (attempt <= 5) {
  console.log("Student Attempt: " + attempt);

  attempt++;
}

//---------------------------do while loop----------------------
let menu = 1;
do {
  console.log("Student Report Generated");

  menu++;
} while (menu <= 1);

//-----------------Global Varibale----------------------

var globalVariable = "Sir, it is Global Variable";

function scope() {
  var functionVariable = "Sir, it is function scope.";

  console.log("Inside Function: ");
  console.log(globalVariable);
  console.log(functionVariable);

  if (true) {
    var varVariable = "var is Function Scoped";

    let letVariable = "let is Block Scoped";

    const constVariable = "const is Block Scoped";

    console.log("Inside Block:");
    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
  }

  console.log("Outside Block:");
}

scope();

//-----------------------------Var Hositing----------------------------

console.log("Before : " + hositedVariable);

var hositedVariable = "Bhuvnesh";

console.log("After: " + hositedVariable);

console.log(hoistedFunction());

//-------------------Function Hositing---------------------

function hoistedFunction() {
  return "Function declaration is hoisted";
}

//-------------------let hoisting---------------

try {
  console.log(hoistedLet);
} catch (error) {
  console.log("let before declaration: " + error.name);
}

let hoistedLet = "Now let is initialized";

console.log("After declaration: " + hoistedLet);

//----------------------const hositing-------------------

try {
  console.log(hoistedConst);
} catch (error) {
  console.log("const before declaration: " + error.name);
}

const hoistedConst = "Now const is initialized";

console.log("After declaration: " + hoistedConst);

//--------------------Function expression Hositing---------------

try {
  console.log(testFunction());
} catch (error) {
  console.log("Function expression before initialization: " + error.name);
}

const testFunction = function () {
  return "Function Expression";
};

console.log(testFunction());

//--------------------- FINAL REPORT -----------------------

console.log("");
console.log("        ==========================================");
console.log("              STUDENT FINAL RESULT REPORT"         );
console.log("        ==========================================");


console.log("Student Name: " + stuName);
console.log("Age: " + age);
console.log("Roll Number: " + rollNo);
console.log("Course: " + course);


console.log("Total Marks: " + calculateTotal());

console.log("Percentage: " + calculatePer(calculateTotal()) + "%");

console.log("Grade: " + calculateGrade(calculatePer()));

console.log("Result: " + result);

console.log("Attendance: " + attendance + "%");

console.log("Attendance Status: " + attendanceStatus(attendance));

console.log("Exam Eligibility: " + examEligibility);

console.log("Certificate Eligibility: " + certificateEligibility);

console.log("------------------------------------------");

console.log("Course Details: " + courseDetails(course));



// var subjectMarks = [{"maths":20},{"science":30},{"english":40}];

// var i;
// function calculateTotal(){
// for(i=0;i<subjectMarks?.length;i++){
//   const result = subjectMarks[i]?.maths + subjectMarks[i+1]?.science+subjectMarks[i+2]?.english;
//   return result;
// }}
// console.log(calculateTotal());
