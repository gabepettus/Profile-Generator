const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "what user name would like to generate a profile for?"
  },
  {
    type: "list",
    message: "What is your favorite color?",
    name: "contact",
    choices: [
      "green",
      "blue",
      "pink"
    ]
  }
]).then(response => {
  console.log("Got user response", response);
  const userid = response.username;
  const color = response.color;
  // now pull data from axios

const config = { headers: { accept: "application/json" } };
axios.get(`https://api.github.com/users/${userid}`, config)
  .then(function(res) {

    // console.log("output",res.data);
    return(res.data);

  }).then(function(rrr) {
    console.log("output promise",rrr);
  });

});