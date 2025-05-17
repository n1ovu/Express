const a = [1, 2, 3, 4, 5]

// some takes 1 param and to see if all element conditions are true or false.
const isTrue = a.every(element => {
	return element > 2
})

console.log(isTrue)