const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school, role, icon, background_color, modifier) {
        super(name, id, email);
        this.school = school;
        // Assign role to object
        this.role = role;
        // Assign icon to object
        this.icon = icon;
        // Assign background_color to object
        this.background_color = background_color;
        // Assign modifier to object
        this.modifier = modifier;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;



// Python print function
function print(x) {
    console.log(x)
}

