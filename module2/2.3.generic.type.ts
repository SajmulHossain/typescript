/**
 * * generics type
 */

{
    // type GenericArray = Array<string>
    type GenericArray<T> = Array<T>

//   const rollNumbers: number[] = [3, 6, 8];
//   const rollNumbers: Array<number> = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

//   const mentors: string[] = ['Mr', 'Mr. Y', 'Mr. Z'];
//   const mentors: Array<string> = ['Mr', 'Mr. Y', 'Mr. Z'];
  const mentors: GenericArray<string> = ['Mr', 'Mr. Y', 'Mr. Z'];

//   const boolArray: boolean[] = [true, false, true]
  const boolArray: Array<boolean> = [true, false, true]

  interface User {
    name: string,
    age: number
  }

  const user : GenericArray<User> = [
    {
        name: 'Sajmul',
        age: 21,
    },
    {
        name: 'Zihan',
        age: 20,
    }
]


    // **generic tuple

    type GenericTuple<X,Y> = [X, Y]

    const manush : GenericTuple<string, string> = ['Mr. x', 'mr. y'];

    const userWithId: GenericTuple<number, {name: string, email: string}> = [1234, { name: 'sajmul', email: 'kire'} ]
}
