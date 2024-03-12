export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade1 = newGrades.filter((grade) => grade.studentId === student.id);
      const grade = grade1 ? grade1.grade : 'N/A';
      return { ...student, grade };
    });
}
