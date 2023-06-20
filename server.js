// Import required modules
const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// Create Express application
const app = express();
const port = process.env.PORT || 3000;
const mainDir = path.join(__dirname, "/public");
