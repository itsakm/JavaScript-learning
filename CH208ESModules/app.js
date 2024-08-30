import { capitalizeWord, makeMoney}  from "./utils.js";
import Person from "./Person.js";

console.log(capitalizeWord('hello world'))
console.log(makeMoney(45))
const person1 = new Person("Avanish",24)
person1.greet();