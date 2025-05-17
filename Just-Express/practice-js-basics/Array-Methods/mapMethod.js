const a = [1, 2, 3, 4, 5]

// map takes 1 param and returns a new array without modifying the original.
const newA = a.map(element => {
	return element * 2
})

console.log(a)
console.log(newA)