// const intervalId = setInterval(mycallback,1000,'Hello');

// function mycallback(a)
// {
//     console.log(a,Date.now())
// }

let intervalId;

function startChange()
{
    console.log(intervalId)
    if(!intervalId){
        intervalId = setInterval(changeColor,1000);
    }
}

function changeColor()
{
    if(document.body.style.backgroundColor !== 'black')
    {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';

    }
    else
    {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

    }
}
function stopChange()
{
    console.log('inside stop',intervalId)
    clearInterval(intervalId)
}

document.querySelector('#start').addEventListener('click',startChange);
document.querySelector('#stop').addEventListener('click',stopChange);