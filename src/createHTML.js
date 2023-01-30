const data = require('../index');
const fs = require('fs');
const Employee = require('../lib/Employee')

function createHTML(data) {
    console.log(data);
    var content =``;
    content = `<p>${data}</p>`;
    content +=`    
    <ul>
    <li>Name: ${data[0]}</li>
    <li>Role: Manager </li>
    <li>ID: ${data[1]}</li>
    <li>Email: ${data[2]}</li>
    <li>Office Number: ${data[3]}</li>
</ul>`
    return content
}

module.exports = createHTML;