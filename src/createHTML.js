const data = require('../index');
const fs = require('fs');
const Employee = require('../lib/Employee')

// function to create html
function createHTML(data) {
    console.log(data);
    var content =``;
    content += `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Team Profile Generator</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
        <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
    </head>
    <body>
        <header>
            <h1 class='text-center'>OUR TEAM</h1>
        </header>
        <main>
            <div class="container">
    `


//this displays the manager's content
content +=`    
<ul>
<li>Name: ${data[0].getName()}</li>
<li>Role: ${data[0].getRole()}</li>
<li>ID: ${data[0].getId()}</li>
<li>Email: ${data[0].getEmail()}</li>
<li>Office Number: ${data[0].getOfficeNumber()}</li>
</ul>`

// For Loop generates Engineer and Intern html

for (let i =1; i < data.length; i++) {

// adds Engineer html
if (data[i].role === "Engineer") {
content += `
<div class="card m-3 shadowCard" style="width: 18rem;">
<div class="card-header text-center bg-danger text-light">
${data[i].getName()} : ${data[i].getRole()}
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">ID: ${data[i].getId()}</li>
<li class="list-group-item">Email:<a href ='mailto: ${data[i].getEmail()}'>${data[i].getEmail()}</a></li>
<li class="list-group-item">Github: https://github.com/${data[i].getGithub()}</li>
</ul>
`
}

{/* <div class="card m-3 shadowCard" style="width: 18rem;">
<div class="card-header engineer">
    ${employee.name}<br>Engineer
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${employee.employeeID}</li>
    <li class="list-group-item">E-mail:<a href="mailto:${employee.email}">${employee.email}</a></li>
    <li class="list-group-item">GitHub:<a target="_blank" href="https://github.com/${employee.gitHub}">${employee.gitHub}</a></li>
</ul>
</div>     */}

// adds Intern html
if (data[i].role === "Intern") {
content += `
<ul>
<li>Name: ${data[i].getName()}</li>
<li>Role: ${data[i].getRole()}</li>
<li>ID: ${data[i].getId()}</li>
<li>Email: ${data[i].getEmail()}</li>
<li>Github: ${data[i].getSchool()}</li>
</ul>
`
}


        
};

content += `
</div>
</main>    
</body>
</html>    
`

return content
}

module.exports = createHTML;