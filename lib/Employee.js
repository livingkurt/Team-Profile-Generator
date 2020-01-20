const app = require("../app.js");

// print(app)

class Employee {
    constructor(name, email, id, role) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role
        // function get_name(){

        // };
        // function get_id(){

        // };
        // function get_email(){

        // };
        // function get_role(){
        //     return 'Employee';
        // };
        // if(this.role === "Employee") {
        //     print('Your in Employee.js')
        // }
    }
}

Employee(app);

// Python print function
function print(x) {
    console.log(x)
}

module.exports = Employee;