// Write your "actions" router here!
const express = require('express');

const router = express.Router();

const Actions = require('./actions-model');


router.get('/', (req, res) => {
    Actions.get()
    .then(actions => res.json(actions))
    .catch(err => console.log(err))


});


router.get('/:id', (req, res) => {
    Actions.get(req.params.id).then(action => {
        if (action) {
            res.status(200).json(action);
        } else {
            res.status(404).json({ error: 'Action not found' });
        }
    })
});


router.post('/', (req, res) => {
    const { project_id, description, notes } = req.body
    if (!project_id || !description || !notes) {
        return res.status(400).json({
            message: "Please provide name and description for the post"
        })
    }

    Actions.insert(req.body)
        .then((actions) => {
            res.status(201).json(actions);

        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: "There was an error while saving the post to the database"
            });
        });

});

router.put('/:id', (req, res, next) => {
    const {project_id, description, notes } = req.body;

    if (!project_id || !description || !notes) {
        return res.status(400).json({
            message: "Please provide name and description for the project"
        });
    }

    Actions.update(req.params.id, req.body)
        .then(updated => {
            res.status(400).json(updated);
        })
        .catch(error => {
            next({
                message: 'We ran into an error updating the project',
                error: error.message
            });
        });
});



router.delete('/:id', (req, res) => {

    Actions.remove(req.params.id, req.body)
        .then(removed => {
            res.status(404).json(removed);
        })
        .catch((err) => {
            console.error(err);
            res.status(404).json({
                message: 'Project not found'
            });
        });
})




module.exports = router;