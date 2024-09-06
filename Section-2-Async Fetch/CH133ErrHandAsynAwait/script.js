const getUser = async () => {
    try {

        // const res = await fetch('https://jsonplaceholder.typicode.com/users')
        
        const res = await fetch('http://httpstat.us/500')
        if(!res.ok)
        {
            throw new Error('Request Failed')
        }
        
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


getUser()