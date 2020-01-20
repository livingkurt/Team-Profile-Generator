// Calling Dependancies

// Calling inquirer for the terminal based interface
const inquirer = require("inquirer");
// const Employee = require("/lib/Employee.js");
// const Engineer = require("/lib/Engineer.js");
// const Manager = require("/lib/Manager.js");
// const Intern = require("/lib/Intern.js");
const fs = require('fs');

// const num = 0;
const team = [];

// Initiate terminal based user interface

async function start_question() {
    // num++
    inquirer.prompt([
        // Ask user to input username
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
                // "Employee",
                "Engineer",
                "Intern"]
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
        },
        {
            type: "input",
            name: "team_name",
            message: "What do you want as your team name?",
            when: (data) => data.new_member === 'false'
        },
        {
            type: "confirm",
            name: "new_member",
            message: "Would you like to add another member?"
        },
        // Then Once those choices have been made
    ]).then(async function (data) {
        // print(data)
        const name = data.name;
        const email = data.email;
        const id = data.id;
        const role = data.role;
        const school = data.school;
        const office_number = data.office_number;
        const username = data.username;
        const new_member = data.new_member;
        // print(new_member)
        const team_name = data.team_name;
        if (role === 'Intern') {
            const intern_i = `<i class="fas fa-graduation-cap"></i>`
            const intern_bg_color = `card_d_i`
            const new_intern = new Create_Team_Member(name, email, id, role, school, intern_i, intern_bg_color);
            
            await team.push(new_intern);
            // await html(name, email, id, role, school, team_name, "School: ", intern_i, intern_bg_color, team_object);
            print(new_intern);
            print(team)
        }
        else if (role === 'Manager') {
            const manager_i = `<i class="fas fa-mug-hot"></i>`
            const manager_bg_color = `card_d_m`
            const new_manager = new Create_Team_Member(name, email, id, role, office_number, manager_i, manager_bg_color);
            
            await team.push(new_manager);
            // print(new_manager);
            print(team)
            // await html(name, email, id, role, office_number, team_name, "Office Number: ", manager_i, manager_bg_color, team_object);
        }
        // else if (role === 'Employee') {
        //     const new_employee = new Create_Team_Member(name, email, id, role);
        //     team_object.emp = new_employee;
        //     print(new_employee);
        //     await html(name, email, id, role, office_number, team_name);
        // }
        else if (role === 'Engineer') {
            
            // print(new_engineer);
            const engineer_i = `<i class="fas fa-ruler-combined"></i>`
            const engineer_bg_color = `card_d_e`
            const new_engineer = new Create_Team_Member(name, email, id, role, username, engineer_i, engineer_bg_color);
            await team.push(new_engineer);
            print(team)
            // await html(name, email, id, role, username, team_name, "GitHub: ", engineer_i, engineer_bg_color, team_object);
        }
    
        if (new_member) {
            await start_question()
        }
        else if (new_member === false){
            print("Done")
            // await finish_html();
        }
    })
};


start_question();


function Create_Team_Member(name, email, id, role, user_specs, icon, background_color) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
    this.icon = icon;
    this.background_color = background_color;
    if (role === 'Intern') {
        this.school = user_specs;
        const file_name = "intern"
        
        // read_template(file_name);
    }
    else if (role === 'Manager') {
        this.office_number = user_specs;
        const file_name = "manager"
        // read_template(file_name);
    }
    else if (role === 'Engineer') {
        this.username = user_specs;
        const file_name = "engineer"
        // read_template(file_name);
    }
    // this.team_object
}

// function read_template(file_name) {
//     fs.readFile(`./templates/${file_name}.html`, "utf8", function (error, data) {

//         if (error) {
//             return console.log(error);
//         }

//         console.log(data);
//         html(data);
//     });
// }

async function html(name, email, id, role, user_specs, team_name, modifier, icon_modifier, bg_modifier) {
    // print(team_object)
    var bg_modifier = bg_modifier;
    if (fs.existsSync('output/team.html')) {
        await append_html(name, email, id, role, user_specs, team_name, modifier, icon_modifier, bg_modifier)
        // print(bg_modifier)
        print("File Does Exist")
    }
    else {
        await create_html(name, email, id, role, user_specs, team_name, modifier, icon_modifier, bg_modifier);
        // print(bg_modifier)
        print("File Does Not Exist")
    }
}

// Function to create the pdf from the github information
async function create_html(name, email, id, role, user_specs, team_name, modifier, icon_modifier, bg_modifier) {
    // Progress Message
    // print("Almost...\n");
    // Try the following things
    
    try {
        // print(bg_modifier)
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

<body>
<header>
    <h1>${team_name}</h1>
</header>
<main>`
        await fs.writeFile('output/team.html', header_html, (error) => {
            if (error) {
                print(error)
            }
        });
        
        await append_html(name, email, id, role, user_specs, team_name, modifier, icon_modifier, bg_modifier);


        // If there is an error catch it
    } catch (e) {
        print('Your Error', e);
    }
}

async function append_html(name, email, id, role, user_specs, team_name, modifier, icon_modifier, bg_modifier) {
    // const html = data
    
    // const engineer_i = `<i class="fas fa-ruler-combined"></i>`
    const html = `
<div id="container_d">
    <div id="${bg_modifier}">
        <div id="card_header_d">
            <h2>${name}</h2>
            <h2>${icon_modifier}${role}</h2>
        </div>
        <div id="card_body_d">
            <div id="card_info_d">
                <div id="card_id_d" class="info_d">
                    <label id="id_l" for="">ID: ${id}</label>
                </div>
                <div id="card_email_d" class="info_d">
                    <label id="email_l" for="">Email: ${email}</label>
                </div>
                <div id="card_user_specific_d" class="info_d">
                    <label id="user_specific_l" for="">${modifier} ${user_specs}</label> </label>
                </div>
            </div>
        </div>
    </div>
</div>`
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
// Hi Kurt so long omg 
// Python print function
function print(x) {
    console.log(x)
}