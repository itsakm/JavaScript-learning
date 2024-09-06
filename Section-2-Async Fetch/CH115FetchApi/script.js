//fetching a JSON file

fetch('./movies.json')
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data)
})

//fetching the text
fetch('./test.txt')
.then((res) => {
    return res.text();
})
.then((data) => {
    console.log(data)
})


//fetching an api
fetch('https://api.github.com/users/itsakm/repos')
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data)
})

