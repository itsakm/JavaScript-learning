const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({user:'john',age:10})
    },1000)
})


promise.then((data) => {
    console.log(data)
})


async function getPromise() {
    const res = await promise;
    console.log(res)
    
}

getPromise();
async function getUsers()
{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data)
}

getUsers()