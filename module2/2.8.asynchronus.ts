// *asynchronus typescript

{
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = 'something'

            if(data) {
                resolve(data)
            } else {
                reject("failed to load data");
            }
        })
    }


    // ? calling createPromise function

    const showData = async() => {
        const data = await createPromise();
        console.log(data);
    }

    // showData();


    interface Todo {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }


    const getTodo = async() : Promise<Todo> => {
       const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       const data = await res.json();
       return data;
    }

    getTodo();
}