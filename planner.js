const express = require('express');
const app = express();
const path = require('path');
const { landing_page } = require('./subject.js');
const public = path.join(__dirname, 'public');

const subjectDAO = require('./subject.js');
const db = new subjectDAO('./planner.db');

app.use(express.static(public));

module.exports = {

    send_message: function(req, res) {
        console.log('button pressed');
        res.redirect('/');
    },

    landing_page: function(req, res) {
            db.base_subjects();
            db.getAllEntries().then((list) => {
                res.render('planner', {
                'title': 'Scheduler',
                'entries': list,
                });
                console.log('promise resolved');
                }).catch((err) => {
                console.log('promise rejected', err);
                })
         
    }

}