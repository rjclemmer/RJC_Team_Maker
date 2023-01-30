const data = require('../index');
const fs = require('fs');
const Employee = require('../lib/Employee')

function createHTML(data) {
    console.log(data);
    var content =``;
    content = `<p>${data}</p>`;

    for (let i =1; i < data.length; i++) {
        if (data[i].role === "Engineer") {
            content += `
            <ul>
            <li>Name: ${data[i].getName()}</li>
            <li>Role: ${data[i].getRole()}</li>
            <li>ID: ${data[i].getId()}</li>
            <li>Email: ${data[i].getEmail()}</li>
            <li>Github: ${data[i].getGithub()}</li>
        </ul>
            `
        }
        
    };

    //this displays the manager's content
    content +=`    
    <ul>
    <li>Name: ${data[0].getName()}</li>
    <li>Role: ${data[0].getRole()}</li>
    <li>ID: ${data[0].getId()}</li>
    <li>Email: ${data[0].getEmail()}</li>
    <li>Office Number: ${data[0].getOfficeNumber()}</li>
</ul>`
    return content
}

module.exports = createHTML;