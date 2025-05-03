//  * type  alias

{
     type Student = {
        name: string
        contactNo?: string
        age: number
        address: string
     }    


     const std1 : Student = {
        name: 'Sajmul',
        contactNo: '',
        age: 59,
        address: 'Dhaka'
     }

     const std2 : Student = {
        name: 'Hossain',
        age: 34,
        address: 'Dhaka'
     }



     type UserName = string
     type IsAdmin = boolean

     const userName : UserName = 'Sajmul'
     const isAdmin : IsAdmin = true


     type Add = (a: number, b: number) => number
    const add : Add = (num1, num2) => num1 + num2;

}