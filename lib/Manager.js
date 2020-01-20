const app = require("../Employee.js");

// print(app)

class Manager extends Employee {
    constructor(name, email, id, role) {
        super(name, email, id);
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role
        // this.office_number = office_number;
        // function get_role(){
        // };
        // if(this.role === "Manager") {
        //     print('Your in Manager.js')
        // }
    }
}

Manager(app);

// Python print function
function print(x) {
    console.log(x)
}