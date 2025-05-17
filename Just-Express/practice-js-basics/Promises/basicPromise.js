const promise = new Promise((resolve, reject) => {
	const sum = 1 + 1
	if (sum === 2) {
		resolve('Success')
	}else {
		reject('Error')
	}
})

promise.then(message => {
	console.log(message)
}).catch(message => {
	console.error(message)
})