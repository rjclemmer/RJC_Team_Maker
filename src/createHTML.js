const data = require('../index');
const fs = require('fs');

function createHTML(data) {
    console.log(data);
    var content =``;
    content = `<p>${data}</p>`;
    return content
}

module.exports = createHTML;