"use strict";
exports.__esModule = true;
var axios_1 = require("axios"); /* importing axios functionality from axios module */
var url = 'https://jsonplaceholder.typicode.com/todos/1'; /* URL which would provide json data */
axios_1["default"].get(url).then(function (response) {
    console.log(response.data); /* to print response data on console, it will not be readable response, so better to break and print in better readable format */
    var todo = response.data;
    var ID = todo.ID;
    var title = todo.Title;
    var finished = todo.finished;
    console.log("\n    The Todo with ID: ".concat(ID, "\n    Has a title of: ").concat(title, "\n    Is it finished? ").concat(finished, "\n  "));
}); /* this entire is a code statement, this is a async HTTP get request call */
/* Explanation
axios.get(url) => using axios get the URL
then((response) => then catch the response to work with further
const todo = response.data; => store response to a constant variable
const ID = todo.ID;  => get id from response
const title = todo.Title;  => get tile from response
const finished = todo.finished;  => get finished from response
console.log(`The Todo with ID: ${ID} Has a title of: ${title} Is it finished? ${finished}`) => then write to console using variables

*/
