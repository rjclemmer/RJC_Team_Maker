const data = require('../index');
const fs = require('fs');
const Employee = require('../lib/Employee')

function createHTML(data) {
    console.log(data);
    var content =``;
    content = `<p>${data}</p>`;
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