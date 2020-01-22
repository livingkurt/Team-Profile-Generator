class Employee {
    // Add arguments to class
    constructor(name, id, email) {
        // Assign name to this.variable
        this.name = name;
        // Assign emal to this.variable
        this.email = email;
        // Assign id to this.variable
        this.id = id;
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
