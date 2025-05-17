const a = [1, 2, 3, 4, 5]

// some takes 3 params (sum, number) and a start value.
// it will accumulate each number in the array and reduce it to a single sum.
let startValue = 0
const b = a.reduce((sum, number) => {
	return sum + number
}, startValue)

console.log(b)

const items = [
	{price: 10},
	{price: 20},
	{price: 14},
	{price: 1},
	{price: 6},
]

const s = items.reduce((sum, item) => {
	return sum + item.price
}, 0)

console.log(s)