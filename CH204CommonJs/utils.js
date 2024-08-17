function capitalizeWord(str)
{
	return str
	.toLowerCase()
	.split(' ')
	.map((word) => word[0].toUpperCase() + word.substr(1))
	.join(' ');

}
/*const message = {
	id:1,
	text:'Hello World'
};*/

function makeMoney(amount)
{
	return `$${amount}`;
}

/*module.exports = capitalizeWord;*/

module.exports = {
	capitalizeWord,
	makeMoney,
};