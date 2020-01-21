class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
        // this.role = role
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee';
    }
}


// Python print function
function print(x) {
    console.log(x)
}

module.exports = Employee;
