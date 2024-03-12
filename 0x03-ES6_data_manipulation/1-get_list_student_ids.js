export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  // map the aray
  return students.map((students) => students.id);
}
