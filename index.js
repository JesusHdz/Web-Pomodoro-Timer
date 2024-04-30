// Step 1: Initialize our npm packages with "npm init -y"
// Step 2: Installing/Changing the npm package type to "module"
// Step 3: Install the express, nodemon, package with "npm i express", "npm i nodemon"
// Adding basic functions to JS file such as default port, port listener, and basic get requests
// Include responses for the get requests

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("docs"));



// GET requests
app.get('/', (req, res) => {
    console.log("GET request for the homepage");
});



// RES requests
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});