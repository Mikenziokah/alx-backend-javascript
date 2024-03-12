export default function getStudentsByLocation(students, city) {
	// using filter to find students in the specified city
	return students.filter(students => students.location === city);
}
