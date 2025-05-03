// * union and intersection type

{
  // type FrontendDeveloper = 'weak' | 'junior'
  // type FullStackDeveloper = 'frontend' | 'expert'

  // type Develoer = FrontendDeveloper | FullStackDeveloper

  // const newDeveloper : FrontendDeveloper = 'junior'

  // type User = {
  //     name: string
  //     email?: string
  //     gender: 'male' | 'female'
  //     bloodGroup: 'O+' | 'A+' | 'AB+'
  // }

  // const user1 : User = {
  //     name: 'Sajmul',
  //     gender: 'male',
  //     bloodGroup: 'A+'
  // }

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper : FullStackDeveloper = {
    skills: ['html', 'css', 'express'],
    designation1: 'Frontend Developer',
    designation: 'Backend Developer'
  }
}
