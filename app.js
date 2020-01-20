// Calling Dependancies

// Calling inquirer for the terminal based interface
const inquirer = require("inquirer");
// const Employee = require("/lib/Employee.js");
// const Engineer = require("/lib/Engineer.js");
// const Manager = require("/lib/Manager.js");
// const Intern = require("/lib/Intern.js");
const fs = require('fs');
const num = 0;

// Initiate terminal based user interface

function start_question(num) {
    num++
    inquirer.prompt([
        // Ask user to input username

        {
            type: "input",
            name: "num_of_members",
            message: "How many team members do you want to create?",
            when: (data) => data.num_of_members === 0
        },
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID number?"
        },
        {
            type: "rawlist",
            name: "role",
            message: "What is your role in the team?",
            choices: [
                "Manager",
                "Employee",
                "Engineer",
                "Intern"
            ]
        },
        {
            type: "input",
            name: "school",
            message: "What school are you attending?",
            when: (data) => data.role === 'Intern'
        },
        {
            type: "input",
            name: "office_number",
            message: "What is your office number?",
            when: (data) => data.role === 'Manager'
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
            when: (data) => data.role === 'Engineer'
        }
        // Then Once those choices have been made
    ]).then(function (data) {
        print(data)
        const num_of_members = data.num_of_members;
        const name = data.name;
        const email = data.email;
        const id = data.id;
        const role = data.role;
        const school = data.school;
        const office_number = data.office_number;
        const username = data.username;
        if (role === 'Intern') {
            const new_intern = new Create_Team_Member(name, email, id, role, school);
            print(new_intern);
        }
        else if (role === 'Manager') {
            const new_manager = new Create_Team_Member(name, email, id, role, office_number);
            print(new_manager);
        }
        else if (role === 'Employee') {
            const new_employee = new Create_Team_Member(name, email, id, role);
            print(new_employee);
        }
        else if (role === 'Engineer') {
            const new_engineer = new Create_Team_Member(name, email, id, role, username);
            print(new_engineer);
        }
        if (num === num_of_members){
            print("Done")
            finish_html(data);
        }
        else {
            start_question(num) 
        }

    });
    
    
}

start_question(num);



function Create_Team_Member(name, email, id, role, user_specs) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role
    if (role === 'Intern') {
        this.school = user_specs;
        const file_name = "intern"
        read_template(file_name);
    }
    else if (role === 'Manager') {
        this.office_number = user_specs;
        const file_name = "manager"
        read_template(file_name);
    }
    else if (role === 'Engineer') {
        this.username = user_specs;
        const file_name = "engineer"
        read_template(file_name);

    }
    else if (role === 'Employee') {
        this.office_number = user_specs;
        const file_name = "employee"
        read_template(file_name);
    }




}

function read_template(file_name) {
    fs.readFile(`./templates/${file_name}.html`, "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        console.log(data);
        html(data);
    });


}

async function html (data) {
    if (fs.existsSync('output/team.html')) {
        append_html(data)
    }
    else {
        create_html(data);
    }
}



// Function to create the pdf from the github information
async function create_html() {
    // Progress Message
    print("Almost...\n");
    // Try the following things
    try {
        const header_html = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <script src="https://kit.fontawesome.com/cc10a71280.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="../css/style.css">
            <title>Manager</title>
        </head>
        
        <body>`
        
        await fs.writeFile('output/team.html', header_html, (error) => {
            if (error) {
                print(error)
            }
        });

    
        // If there is an error catch it
    } catch (e) {
        print('Your Error', e);
    }
}

async function append_html(data) {
    const html = data
    await fs.appendFile('output/team.html', html, (error) => {
        if (error) {
            print(error)
        }
    });
}


async function finish_html(data) {
    const footer_html = `
    </main>
    </body>
    
    </html>`
    await fs.appendFile('output/team.html', footer_html, (error) => {
        if (error) {
            print(error)
        }
    });
    
}

// Python print function
function print(x) {
    console.log(x)
}