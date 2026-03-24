// type Grade = string | number; If I wanted grade to stay a string or number but I choose to live it as a number

interface Student{
    id: number;
    name: string;
    // grade: Grade;
    grade: number
    isEnrolled: boolean
}



const students: Student[] = [
  { id: 1, name: "Alice", grade: 85, isEnrolled: true },
  { id: 2, name: "Bob", grade: 50, isEnrolled: false } // Problem: Grade is a string here!, changed it to be a number
];

function updateGrade(id:number, newGrade:number) {
  const student = students.find(s => s.id === id);
  if (student) {
    student.grade = newGrade;
    console.log(`Updated ${student.name}'s grade to ${newGrade}`);
  } else {
    console.log("Student not found");
  }
}

// This should throw an error in TypeScript but works in JS
// updateGrade(1, "Excellent"); 
updateGrade(2, 49);
students.push({ id: 3, name: "Charlie", grade: 60, isEnrolled: true }); // Problem: Wrong property name (fullName) soved and passed required properties