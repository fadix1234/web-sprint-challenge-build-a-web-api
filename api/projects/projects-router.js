// Write your "projects" router here!
server.get('/api/projects', (req, res) => {
    res.status(200).json({});
  });

  server.get('/api/projects/:id', (req, res) => {
    res.status(200).send('404');
  });