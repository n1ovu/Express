function createUser(name, age) {
	return {name: name, age: age, human: true}
}

// function User(name, age) {
// 	this.name = name
// 	this.age = age
// 	this.human = true
// }
class User {
	constructor(name, age) {
		this.name = name
		this.age = age
		this.human = true
	}
}
const user = new User('Sally', 25)
const userFunc = createUser('Kyle', 25)
console.log(user)
console.log(userFunc)

