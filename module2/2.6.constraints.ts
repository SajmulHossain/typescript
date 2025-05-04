// * constraints

{
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 222,
    name: "sajmul",
    email: "sajmul.com",
    developType: "Nlwd",
  });
  const student2 = addCourseToStudent({
    id: 333,
    name: "sajmul",
    email: "sajmul.com",
    hasWatch: "Apple",
  });

  const student3 = addCourseToStudent({
    emai: "email",
    id: 332,
    name: "kire",
    email: "kire",
  });
}
