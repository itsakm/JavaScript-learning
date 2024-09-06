class Person
{
	constructor(name,age)
	{
		this.age = age
		this.name = name
	}	

	greet()
	{
		console.log(`Hi, my name is ${this.name} my age is ${this.age}`);
	}
}

export default Person;