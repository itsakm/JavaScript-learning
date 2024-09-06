// setTimeout(function(){
//     console.log('Hello from callback');
// },2000);

// setTimeout(changeText,2000);

function changeText()
{
    document.querySelector('h1').textContent='Hello from callback';
}

// console.log('Hello from global scope')

const timerId = setTimeout(changeText,3000);

document.querySelector('#clear').addEventListener('click'
    ,() => {
        console.log(timerId)
        clearTimeout(timerId)
        console.log('Timer cancelled');
    })