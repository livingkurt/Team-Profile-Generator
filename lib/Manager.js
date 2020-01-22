const Employee = require("../lib/Employee");

class Manager extends Employee {
    // Add arguments to class
    constructor(name, id, email, officeNumber, role, icon, background_color, modifier, team_name) {
         // Get arguments from Employee.js
        super(name, id, email);
        this.officeNumber = officeNumber;
        // Assign team name to object
        this.team_name = team_name
        // Assign role to object
        this.role = role;
        // Assign icon to object
        this.icon = icon;
        // Assign background_color to object
        this.background_color = background_color;
        // Assign modifier to object
        this.modifier = modifier;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

// Export Class
module.exports = Manager;

