const app = require("../Employee.js");

print(app)

class Manager {
    constructor(name, email, id, role, office_number) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role
        this.office_number = office_number;
        function get_name(){

        };
        function get_id(){

        };
        function get_email(){

        };
        function get_role(){

        };
        if(this.role === "Manager") {
            print('Your in Manager.js')
        }
    }
}

Manager(app);

// Python print function
function print(x) {
    console.log(x)
}