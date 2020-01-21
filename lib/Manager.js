const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Intern;



// Python print function
function print(x) {
    console.log(x)
}

