const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github, role, icon, background_color, modifier) {
        super(name, id, email);
        this.github = github;
        // Assign role to object
        this.role = role;
        // Assign icon to object
        this.icon = icon;
        // Assign background_color to object
        this.background_color = background_color;
        // Assign modifier to object
        this.modifier = modifier;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;


// Intern(app);

// Python print function
function print(x) {
    console.log(x)
}