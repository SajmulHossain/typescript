/**
 * *function with generics
 */

{
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  interface User {
    id: number;
    name: string;
  }

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");
  const resGenericObj = createArrayWithGeneric<User>({
    id: 505,
    name: "mr. x",
  });

  // *create array with touple
  const createArrayWithTouple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res2 = createArrayWithTouple<string, number>("Bangladesh", 222);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "sajmul",
    email: "sajmul.com",
    developType: "Nlwd",
  });
  const student2 = addCourseToStudent({
    name: "sajmul",
    email: "sajmul.com",
    hasWatch: "Apple",
  });
}
