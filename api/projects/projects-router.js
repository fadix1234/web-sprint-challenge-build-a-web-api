// Write your "projects" router here!
const express = require('express');

const router = express.Router();
// router.get('/', (req, res) => {
//     res.send(`Hello Projects`);
// });
const Projects = require('./projects-model');

router.get('/', (req, res) => {
    Projects.get().then(projects => res.status(200).json(projects)).catch(err => console.log(err))


});

router.get('/:id', (req, res) => {
    Projects.get(req.params.id).then(project => {
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ error: 'Project not found' });
        }
    })
});

router.post('/', (req, res) => {
    const { name, description } = req.body
    if (!name || !description) {
        return res.status(400).json({
            message: "Please provide name and description for the post"
        })
    }

    Projects.insert(req.body)
        .then((projects) => {
            res.status(201).json(projects);

        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: "There was an error while saving the post to the database"
            });
        });

});



module.exports = router;