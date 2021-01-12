class Employer {
    constructor(name, position, salary) {
    this.name = name
    this.position = position
    this.salary = salary
    }
}

const promote = function(newPosition, newSalary) {
    this.position = newPosition
    this.salary = newSalary
    return `${this.name} is a ${this.position} and earns ${this.salary}`
}

const Employer1 = new Employer('Anton', 'CEO', 5000)
const Employer2 = new Employer('Nastya', 'Manager', 3000)

console.log(Employer1)
console.log(promote.call(Employer1, 'Owner', 25000))
console.log(promote.apply(Employer1, ['Owner', 27000]))
console.log(promote.bind(Employer1, 'Owner', 29000)())
console.log(Employer1)





