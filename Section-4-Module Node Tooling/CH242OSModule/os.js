const os = require('os');

//arch() identifying the cpu architecture
console.log(os.arch())

//platform() identifyinng the os
console.log(os.platform())

//cpus()
console.log(os.cpus())

//freemem()
console.log(os.freemem())
console.log(`Free Memory: ${os.freemem()/1024/1024/1024} GB`);

//totalmem()
console.log(os.totalmem())
console.log(`Total Memory: ${os.totalmem()/1024/1024/1024} GB`);

console.log(os.hostname())