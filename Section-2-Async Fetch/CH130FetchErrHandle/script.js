// fetch('https://httpstat.us/200')
// .then((res) => res)
// .then(() => {
//     console.log('success')
// });


//it will execute .then though we are getting 404 we'll hav eto do manually
fetch('https://httpstat.us/404')
.then((res) => {
    if(!res.ok)
    {
        throw new Error('Request Failed')
    }
})
.then(() => {
    console.log('success')
})
.catch((err) => {
    console.log(err)
});