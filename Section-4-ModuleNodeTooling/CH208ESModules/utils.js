console.log(123)
function capitalizeWord(str)
{
	return str
	.toLowerCase()
	.split(' ')
	.map((word) => word[0].toUpperCase() + word.substr(1))
	.join(' ');

}

function makeMoney(amount)
{
	return `$${amount}`;
}

/*module.exports = capitalizeWord;*/

// export default capitalizeWord; <for single export>

export {
    capitalizeWord,
    makeMoney
}