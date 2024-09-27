// const fs = require('fs'); //Can be use for Async(Callback version) and Sync version
const fs = require('fs/promises'); //Can be use for Async(promise Version)

//we have two method Syncrhonous Asyncronous


//Callback Version of Asynchronous 

// fs.writeFile('file1.txt','Hello World', (err) => {

//     if(err) throw err;
//     console.log('File Created');

// });

//Promise version of Asynchronous 
// fs.writeFile('file2.txt','Hello World')
// .then(() => console.log('File Created'))
// .catch((err) => console.log(err));


//Synchronous Version
// fs.writeFileSync('file3.txt','Hello World3');
// console.log('File Created');

//Async/Await 

// async function CreateFile(filename,content) {

//     try{
//         await fs.writeFile(filename,content);
//         console.log('File created')
//     }
//     catch(err)
//     {
//         console.log(err)
//     }
    
// }

// CreateFile('file4.txt','Hello World4');


//Read from file

// async function readFile(filename) {

//     try{
//         const data = await fs.readFile(filename,'utf8');
//         console.log(data)
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
    
// }

// readFile('file1.txt');

//Delete A file

// async function deleteFile(filename) {
//     try{
//         await fs.unlink(filename);
//         console.log(`File ${filename} deleted`);
//     }    
//     catch(err)
//     {
//         console.log(err);
//     }
// }

// deleteFile('file4.txt');

//Rename a fiel

// async function renameFile(oldName,newName) {
//     try
//     {
//         await fs.rename(oldName,newName);
//         console.log(`File ${oldName} renamed to ${newName}`);
//     }
//     catch(err)
//     {
//         console.log(err)
//     }
    
// }

// renameFile('file1.txt','file_1.txt');

//Create a folder

async function createFolder(folderName) {

    try{
        await fs.mkdir(folderName);
        console.log(`Folder ${folderName} created`);
    }
    catch(err)
    {
        console.log(err);
    }
    
}

createFolder('folder1');