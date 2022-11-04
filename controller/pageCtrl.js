const path = require('path')

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../index.html"))
    },
    homeCss: (req, res) => {
        res.sendFile(path.join(__dirname, "../index.css"))
    },
    homeJs: (req, res) => {
        res.sendFile(path.join(__dirname, "../index.js"))
    },
}