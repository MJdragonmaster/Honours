const express = require('express');
const app = express();
const path = require('path');
const { brotliDecompress } = require('zlib');
const { landing_page } = require('../models/subject.js');
const public = path.join(__dirname, 'public');

const subjectDAO = require('../models/subject.js');
const db = new subjectDAO('./subject.db');

app.use(express.static(public));

module.exports = {

    send_message: function(req, res) {
        if (!req.body.name) {
            console.log('no name entered');
            res.redirect('/');
        } else {
        db.add_entry(req.body.name);
        res.redirect('/');
        }
    },

    landing_page: function(req, res) {
            db.getAllEntries().then((list) => {
                res.render('planner', {
                'title': 'Scheduler',
                'entries': list,
                });
                console.log('promise resolved');
                }).catch((err) => {
                console.log('promise rejected', err);
                })
         
    },

    delete: function(req, res) {
        if (!req.body.id) {
            res.status(400).send("Please choose a subject to delete.");
            return;
            }
        db.removeEntries(req.body.id);
        res.redirect('/');
    }

}