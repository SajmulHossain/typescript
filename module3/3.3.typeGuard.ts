// * type guard ---->

{
  type Num = string | number;
  const add = (param1: Num, param2: Num): Num => {
    if (typeof param1 === "number" && typeof param1 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add("2", 3);

  //  * in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "oi kire",
  };

  const adminUser: AdminUser = {
    name: "modhu modhu",
    role: "admin",
  };

  getUser(adminUser)
}
