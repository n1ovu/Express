const a = [1, 2, 3, 4, 5]

// find takes 1 param and it finds the first element that matches.
const newA = a.find(element => {
	return element > 2
})

console.log(newA)