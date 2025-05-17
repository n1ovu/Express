const a = [1, 2, 3, 4, 5]

// filter take 1 param and creates a new array with the elements we choose.
const newA = a.filter(element => {
	return element > 2
})

console.log(newA)