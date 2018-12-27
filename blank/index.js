const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

app.listen(port);
console.log(`My Portfolio is listening on ${port}`);


let projectData = [
    {
        name: 'Trade Me',
        html_url: 'http://preview.trademe.co.nz',
        description: 'I helped people buy stuff'
    }
];

app.get('/api/projects', (req, res) => {
    // Return projects as json
    res.json(projectData);
});