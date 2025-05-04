// !conditional type

{
    type a1 = number;
    type a2 = undefined

    type x = a1 extends null ? true : false   //conditional type
    type Y = a1 extends null ? true : a2 extends undefined ? undefined : any;

    type Sheikh =  {
        bike: string
        car: string
        ship: string
    }

    // ? car ache kina / bike ache kina / ship ache kina check korbo 
    type CheckVehicle<T> = T extends keyof Sheikh /* "bike" | "car" | "ship" */ ? true : false
    type HasBike = CheckVehicle<"bike">
}