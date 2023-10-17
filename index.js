// Load all redirects from redirect.yml file
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')


const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8')
console.log(redirectsFile)



// Generate html page for each redirect url from template.html