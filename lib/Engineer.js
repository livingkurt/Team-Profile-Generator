const app = require("../Employee.js");

print(app)

class Engineer {
    constructor(name, email, id, role, username) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role
        this.username = username;
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

Engineer(app);

// Python print function
function print(x) {
    console.log(x)
}