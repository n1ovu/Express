const a = [1, 2, 3, 4, 5]

// forEach takes 2 params (element, index) and loops through the array.
// index is optional
console.log(a[0])
a.forEach((element, index) => {
	console.log(element, index)
})