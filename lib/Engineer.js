const Employee = require("../lib/Employee");

class Engineer extends Employee {
    // Add arguments to class
    constructor(name, id, email, github, role, icon, background_color, modifier) {
        // Get arguments from Employee.js
        super(name, id, email);
        // Assign github username to object
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

// Export Class
module.exports = Engineer;
