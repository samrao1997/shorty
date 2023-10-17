// Load all redirects from redirect.yml file
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')


const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8')
const redirects = YAML.parse(redirectsFile)


// Generate html page for each redirect url from template.html
const templateHTML = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8')


// Loop through all url redirect and generate a html page
for (let [slug, url] of Object.entries(redirects)) {
    console.log('Generating html page for ', slug)

    const html = templateHTML.replaceAll('https://example.com', url)
    console.log(html)
}