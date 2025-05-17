const a = [1, 2, 3, 4, 5]

// some takes 1 param and to see if one element condition is true or false.
const isTrue = a.some(element => {
	return element > 2
})

console.log(isTrue)