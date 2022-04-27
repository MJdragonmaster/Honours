const express = require('express');
const app = express();
const path = require('path');
const { landing_page } = require('../../Project/Controllers/weekControllers');
const public = path.join(__dirname, 'public');

app.use(express.static(public));

module.exports = {

    send_message: function(req, res) {
        console.log('button pressed');
        res.redirect('/');
    },

    landing_page: function(req, res) {
        res.render('planner', {
            'title': 'Scheduler' 
            }); 
    }

}