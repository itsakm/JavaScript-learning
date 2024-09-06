function getData(endPoint)
{
    return new Promise((resolve,reject) => {

        const xhr = new XMLHttpRequest();

    xhr.open('GET',endPoint);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4)
        {
            if(this.status === 200){
                resolve(JSON.parse(this.responseText));
            }
            else {
                reject('Something went wrong')
            }
        }

        
    }

    setTimeout(() => {
        xhr.send();
    },Math.floor(Math.random() * 3000)+1000);

    });
    
}

const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorPromise = getData('./directors.json');


Promise.all([moviesPromise,actorsPromise,directorPromise])
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})