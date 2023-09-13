// Write your "projects" router here!
const express = require('express');

const router = express.Router();

router.get('/api/projects', (req, res) => {
    if (!projects) {
        res.status(500).json([]);
    } else {
        res.status(200).json(projects);
    }
});


router.get('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send('404');
});

module.exports = router;