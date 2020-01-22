// Calling Dependancies

// Calling inquirer for the terminal based interface
const inquirer = require("inquirer");
// Calling fs to modify/create files
const fs = require('fs');
// Create an empty array that the team members will be added to
const team = [];

// Ask Questions for the Manager Only
async function start_questions() {
    inquirer.prompt([
        // Ask user to input name
        {
            type: "input",
            name: "name",
            message: "What is your name (Manager)?"
        },
        // Ask user to input email
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        // Ask user to input id
        {
            type: "input",
            name: "id",
            message: "What is your ID number?"
        },
        // Ask user to input office number
        {
            type: "input",
            name: "office_number",
            message: "What is your office number?",
        },
        // Ask user to input team name
        {
            type: "input",
            name: "team_name",
            message: "What do you want as your team name?",
        },
        // Then Once those choices have been made
    ]).then(async function (data) {
        // Assign Manager Name to Variable
        const name = data.name;
        // Assign Manager Email to Variable
        const email = data.email;
        // Assign Manager ID to Variable
        const id = data.id;
        // Assign Manager Office Number to Variable
        const office_number = data.office_number;
        // Assign the Team Name to Variable
        const team_name = data.team_name;
        // Assign Manager Role to Variable
        const role = 'Manager';
        // Assign Manager Icon to Variable
        const manager_i = `<i class="fas fa-mug-hot"></i>`
        // Assign Manager Bg Color to Variable
        const manager_bg_color = `card_d_m`
        // Assign Manager Modifier to Variable
        const manager_modifier = `Office Number: `
        // Create an Object for manager
        const new_manager = new Create_Team_Member(name, email, id, role, office_number, manager_i, manager_bg_color, manager_modifier, team_name);
        // Add the Manager Object to the team array
        await team.push(new_manager);
        // Print the Team in this current moment
        print(team)
        // Start the questions for the employees that will loop back around as long as you would like it to
        await loop_questions();
    })

};

// Start questions for manager
start_questions();

// Initiate terminal based user interface
async function loop_questions() {
    inquirer.prompt([
        // Ask user to input username
        {
            type: "input",
            name: "name",
            message: "What is your name (Employee)?"
        },
        // Ask user to input name
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        // Ask user to input id
        {
            type: "input",
            name: "id",
            message: "What is your ID number?"
        },
        // Ask user to input role
        {
            type: "rawlist",
            name: "role",
            message: "What is your role in the team?",
            choices: [
                "Engineer",
                "Intern"]
        },
        // Ask user to input School for Interns
        {
            type: "input",
            name: "school",
            message: "What school are you attending?",
            when: (data) => data.role === 'Intern'
        },
        // Ask user to input username for Engineers
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
            when: (data) => data.role === 'Engineer'
        },
        // Ask user if they would like to add another memeber
        {
            type: "confirm",
            name: "new_member",
            message: "Would you like to add another member?"
        },
        // Then Once those choices have been made
    ]).then(async function (data) {
        // Assign Employee Name to Variable
        const name = data.name;
        // Assign Employee emal to Variable
        const email = data.email;
        // Assign Employee id to Variable
        const id = data.id;
        // Assign Employee role to Variable
        const role = data.role;
        // Assign Employee school to Variable
        const school = data.school;
        // Assign Employee username to Variable
        const username = data.username;
        // Assign the new member outcome to Variable
        const new_member = data.new_member;
        // If the user chose intern as their role
        if (role === 'Intern') {
            // Assign Intern Icon to Variable
            const intern_i = `<i class="fas fa-graduation-cap"></i>`
            // Assign Intern Bg Color to Variable
            const intern_bg_color = `card_d_i`
             // Assign Intern Modifier to Variable
            const intern_modifier = `Office Number: `
            // Create an Object for Intern
            const new_intern = new Create_Team_Member(name, email, id, role, school, intern_i, intern_bg_color, intern_modifier);
            // Add the Intern Object to the team array
            await team.push(new_intern);
            // Print the Team in this current moment
            print(team)
        }
        else if (role === 'Engineer') {
            // Assign Engineer Icon to Variable
            const engineer_i = `<i class="fas fa-ruler-combined"></i>`
            // Assign Engineer Bg Color to Variable
            const engineer_bg_color = `card_d_e`
            // Assign Engineer Modifier to Variable
            const engineer_modifier = `GitHub: `
            // Create an Object for Engineer
            const new_engineer = new Create_Team_Member(name, email, id, role, username, engineer_i, engineer_bg_color, engineer_modifier);
            // Add the Engineer Object to the team array
            await team.push(new_engineer);
            // Print the Team in this current moment
            print(team)
        }
        // If the user chooses to add another team member
        if (new_member) {
            // Start employee questions again
            await loop_questions()
        }
        // If the user chooses not to add another team member
        else if (new_member === false) {
            // Loop through team array and create html from that infomation
            await loop_through_array(team)
            print("Done")
            // await finish_html();
        }
    })
};

// Loop through team array and create html from that infomation
async function loop_through_array() {
    // Create html with adding the Team name to the header
    await create_html(team[0].team_name);
    // Loop through all of the employee objects in array
    for (let i = 0; i < team.length; i++) {
        // Assign Name to Variable
        const name = team[i].name;
        // Assign email to Variable
        const email = team[i].email;
        // Assign id to Variable
        const id = team[i].id;
        // Assign role to Variable
        const role = team[i].role;
        // Assign icon to Variable
        const icon = team[i].icon;
        // Assign background_color to Variable
        const background_color = team[i].background_color;
        // Assign modifier to Variable
        const modifier = team[i].modifier;
        // Assign user_specs to Variable
        const user_specs = team[i].user_specs;
        // Add all employee information to html file
        await append_html(name, email, id, role, icon, background_color, modifier, user_specs)
    }
    // Add the ending tags to html
    await finish_html();
}

// Object Creator for each new employee member
function Create_Team_Member(name, email, id, role, user_specs, icon, background_color, modifier, team_name) {
    // Assign team name to object
    this.team_name = team_name
    // Assign name to object
    this.name = name;
    // Assign email to object
    this.email = email;
    // Assign id to object
    this.id = id;
    // Assign role to object
    this.role = role;
    // Assign icon to object
    this.icon = icon;
    // Assign background_color to object
    this.background_color = background_color;
    // Assign modifier to object
    this.modifier = modifier;
    // Assign user_specs to object
    this.user_specs = user_specs;
}

// Create html with adding the Team name to the header
async function create_html(team_name) {
    // Try creating html file
    try {
        // Aassign Header html that goes above employee information
        const header_html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/cc10a71280.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../css/style.css">
    <title>Team Profile Generator</title>
</head>

<body>
<header>
    <h1>${team_name}</h1> 
</header>
<main>`
        // Create html file with header html string
        await fs.writeFile('output/team.html', header_html, (error) => {
            if (error) {
                print(error)
            }
        });
        // If there is an error catch it
    } catch (e) {
        print(e);
    }
}

// Append to the created html file with each employee card
async function append_html(name, email, id, role, icon, background_color, modifier, user_specs) {
    // Aassign employee information to a variable
    const html = `
    <div id="container_d">
        <div id="${background_color}">
            <div id="card_header_d">
                <h2>${name}</h2>
                <h2>${icon}${role}</h2>
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
    // Append to the created html file with each employee card
    await fs.appendFile('output/team.html', html, (error) => {
        if (error) {
            print(error)
        }
    });
}

// Append the ending tags to html file
async function finish_html() {
    // Aassign ending tags to a variable
    const footer_html = `


</main>
</body>

</html>`
    // Append the ending tags to html file
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