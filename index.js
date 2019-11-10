const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const createHTML = require('./template.js');
let color = "yellow";
let userName = "yellow";

inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "what user name would like to generate a profile for?"
  },
  {
    type: "list",
    message: "What is your favorite color?",
    name: "color",
    choices: [
      "green",
      "blue",
      "pink"
    ]
  }
]).then( response => {
  console.log("Got user response", response);
  const userid = response.username;
  userName = userid;
  color = response.color;

  const config = { headers: { accept: "application/json" } };

  axios.get(`https://api.github.com/users/${userid}`, config)
  .then( response => buildGitResults(response.data) )
  .then( response => createHTML(response) )
  .then( response => generatePdf(response) )
});

function buildGitResults(res) {
  // console.log("Got gitHub response", res);
  // build response from 
  const results = {
    color: color,
    imageLink: res.avatar_url, 
    userName: res.name,
    location: `https://google.com/maps/place/${res.location}`,
    gitHubProf: res.html_url,
    gitHubBlog: res.blog,
    bio: res.bio,
    numPubRepos: res.public_repos,
    numFollowers: res.followers,
    numStars: res.starred_url,
    numFollowing: res.following
  }
  return(results);
}

function generatePdf(html) {
  console.log("generatePdf",html);
  var fs = require('fs'), convertFactory = require('electron-html-to');
  
  var conversion = convertFactory({ converterPath: convertFactory.converters.PDF });
  
  conversion({ html: html }, function(err, result) {
    if (err) {
      return console.error(err);
    }
  
    console.log(result.numberOfPages);
    console.log(result.logs);
    result.stream.pipe(fs.createWriteStream(`portfolio_${userName}.pdf`));
    // conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
    console.log(`Your pdf file ./portfolio_${userName}.pdf is available in your current directory`);
  });
}