const Note = require('../models/note.js');

function create(req, res) {
    res.render('notes/create')
}

function add(req, res) {
    Note.add(req.body);
    res.redirect('/')
    add: add
}

module.exports = {
    create: create,
    add: add
}