const app = require("../Employee.js");

// print(app)

class Engineer extends Employee {
    constructor(name, email, id, role) {
        super(name, email, id);
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role
        // this.username = username;
        // function get_github(){

        // };
        // function get_role(){

        // };
        // if(this.role === "Manager") {
        //     print('Your in Manager.js')
        // }
    }
}

Engineer(app);

// Python print function
function print(x) {
    console.log(x)
}