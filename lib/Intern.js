const app = require("../Employee.js");

// print(app)

class Intern extends Employee {
    constructor(name, email, id, role) {
        super(name, email, id);
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role
        // print(email)
        // this.school = school;
        // function get_school(){

        // };
        // function get_role(){

        // };
        // if(this.role === "Intern") {
        //     print('Your in Intern.js')
        // }
    }
}


Intern(app);

// Python print function
function print(x) {
    console.log(x)
}