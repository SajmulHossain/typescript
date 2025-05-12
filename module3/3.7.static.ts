//  * static

{
    class Counter {
        static count: number = 0;
        static increament() {
            return Counter.count += 1;
        }

        static decrement() {
            return Counter.count -= 1;
        }
    }

    // const instance1 = new Counter();
    // console.log(instance1.increament()); // * different memory

    // const instance2 = new Counter();
    // console.log(instance2.increament()); // * different memory

    console.log(Counter.increament());
    console.log(Counter.increament());
    console.log(Counter.increament()); // * static method call korar niom
}