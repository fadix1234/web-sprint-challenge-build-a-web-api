// Write your "actions" router here!
const express = require('express');

const router = express.Router();

const Actions = require('./actions-model');


router.get('/', (req, res) => {
    Actions.get().then(actions => res.status(200).json(actions)).catch(err => console.log(err))


});