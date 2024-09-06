

// document.querySelector('button').addEventListener('click',toggle)


//create own callback

const posts = [
    {title:'Post One',body:'This is the post one'},
    {title:'Post One',body:'This is the post one'},
];

function createPost(post,cb)
{
    setTimeout(() =>{
        posts.push(post);
        cb();
    },2000)
}

function getPosts()
{
    setTimeout(() => {
     posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `<h1>${post.title} ${post.body}</h1>`;
        document.querySelector('#posts').appendChild(div)
     })   

    },1000) 
}

createPost(({title:'post theree',body:'this is post three'}),getPosts);

