//create a promise
const promise = new Promise((resolve,reject) => {
    //Do some async task
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    },2000);
});


// promise.then(() => {
//     console.log('Promise consumed....')
// })


const getUser = new Promise((resolve,reject) => {
    setTimeout(() => {
        let err = false;

        if(!err)
        {
            resolve({name:'John',age:30});
        }
        else{
            reject('Error:something went wrong');
        }
        
    },1000);
})

getUser
.then((user) => { console.log(user) })
.catch((err) => console.log(err))
.finally(() => console.log('Resolve or rejected'));


console.log('hello from global scope')