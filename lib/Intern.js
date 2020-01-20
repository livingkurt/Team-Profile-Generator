const app = require("../Employee.js");

print(app)

class Intern {
    constructor(name, email, id, role, school) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role
        this.school = school;
        function get_name(){

        };
        function get_id(){

        };
        function get_email(){

        };
        function get_role(){

        };
        if(this.role === "Intern") {
            print('Your in Intern.js')
        }
    }
}


Intern(app);

// Python print function
function print(x) {
    console.log(x)
}