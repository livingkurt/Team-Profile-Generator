// Calling Dependancies

// Calling inquirer for the terminal based interface
const inquirer = require("inquirer");
const fs = require('fs');
const team = [];
let role = "";


async function start_questions() {
    inquirer.prompt([
        // Ask user to input username
        {
            type: "input",
            name: "name",
            message: "What is your name (Manager)?"
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
            type: "input",
            name: "office_number",
            message: "What is your office number?",
        },
        {
            type: "input",
            name: "team_name",
            message: "What do you want as your team name?",
        },
        // Then Once those choices have been made
    ]).then(async function (data) {
        // const new_member = data.new_member;
        
        // const manager_confirm = data.manager_confirm
        // const team_name = data.team_name;
        const name = data.name;
        const email = data.email;
        const id = data.id;
        const office_number = data.office_number;
        const team_name = data.team_name;
        print(team_name)
        role === 'Manager'
        const manager_i = `<i class="fas fa-mug-hot"></i>`
        const manager_bg_color = `card_d_m`
        const manager_modifier = `Office Number: `
        const new_manager = new Create_Team_Member(name, email, id, role, office_number, manager_i, manager_bg_color, manager_modifier, team_name);
        await team.push(new_manager);
        print(team)
        // }
        await loop_questions(team_name);
    })

};

start_questions();

// Initiate terminal based user interface
async function loop_questions(team_name) {
    inquirer.prompt([
        // Ask user to input username
        {
            type: "input",
            name: "name",
            message: "What is your name (Employee)?"
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
            type: "confirm",
            name: "new_member",
            message: "Would you like to add another member?"
        },
        // Then Once those choices have been made
    ]).then(async function (data) {
        const name = data.name;
        const email = data.email;
        const id = data.id;
        const role = data.role;
        const school = data.school;
        // const office_number = data.office_number;
        const username = data.username;
        const new_member = data.new_member;
        
        if (role === 'Intern') {
            const intern_i = `<i class="fas fa-graduation-cap"></i>`
            const intern_bg_color = `card_d_i`
            const intern_modifier = `Office Number: `
            const new_intern = new Create_Team_Member(name, email, id, role, school, intern_i, intern_bg_color, intern_modifier);
            await team.push(new_intern);
            print(team)
        }
        // else if (role === 'Manager') {
        //     const manager_i = `<i class="fas fa-mug-hot"></i>`
        //     const manager_bg_color = `card_d_m`
        //     const manager_modifier = `Office Number: `
        //     const new_manager = new Create_Team_Member(name, email, id, role, office_number, manager_i, manager_bg_color, manager_modifier);
        //     await team.push(new_manager);
        //     print(team)
        // }
        else if (role === 'Engineer') {
            const engineer_i = `<i class="fas fa-ruler-combined"></i>`
            const engineer_bg_color = `card_d_e`
            const engineer_modifier = `GitHub: `
            const new_engineer = new Create_Team_Member(name, email, id, role, username, engineer_i, engineer_bg_color, engineer_modifier);
            await team.push(new_engineer);
            print(team)
        }
        if (new_member) {
            await loop_questions(team_name)
        }
        else if (new_member === false) {
            await loop_through_array(team)
            print("Done")
            await finish_html();
        }
    })
};

async function loop_through_array(team_name) {
    await create_html(team[0].team_name);
    for (let i = 0; i < team.length; i++) {
        const name = team[i].name;
        const email = team[i].email;
        const id = team[i].id;
        const role = team[i].role;
        const icon = team[i].icon;
        const background_color = team[i].background_color;
        const modifier = team[i].modifier;
        const user_specs = team[i].user_specs;
        await append_html(name, email, id, role, icon, background_color, modifier, user_specs)
    }
}



function Create_Team_Member(name, email, id, role, user_specs, icon, background_color, modifier, team_name) {
    this.team_name = team_name
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
    this.icon = icon;
    this.background_color = background_color;
    this.modifier = modifier;
    this.user_specs = user_specs;
}

// Function to create the pdf from the github information
async function create_html(team_name) {

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
    <title>Team Profile Generator</title>
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
        // If there is an error catch it
    } catch (e) {
        print(e);
    }
}

async function append_html(name, email, id, role, icon, background_color, modifier, user_specs) {
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
    await fs.appendFile('output/team.html', html, (error) => {
        if (error) {
            print(error)
        }
    });
}




async function finish_html() {
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