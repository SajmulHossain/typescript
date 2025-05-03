/**
 * *spread operator
 * *rest operator
 * *destructuring
 */


{
    // *spread operator

    const bros1 : string[] = ['Mir', 'Firoz', 'Mizan'];
    const bros2 : string[] = ['Tanmoy', 'Nahid', 'Rahat'];

    // bros1.push(bros2);  // *this is wrong, because I cannot push array value to string type array!
    bros1.push(...bros2);

    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2  = {
        prisma: 'Firoz',
        nextjs: 'Tanmoy',
        cloud: 'Nahid'
    }

    const mentors = {
        ...mentors1,
        ...mentors2
    }



    // * rest operator

    const greetFriends = (...friends: string[]) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);

        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }


    greetFriends('Abul', 'Babul', 'Kabul', 'Sajmul', 'Hossain', 'Zihan');
}