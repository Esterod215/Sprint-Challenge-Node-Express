// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!

const express = require('express');
const server = express();
const dbProjects = require('./data/helpers/projectModel');
const dbActions = require('./data/helpers/actionModel')
server.use(express.json());




server.get('/api/projects',(req,res)=>{
    dbProjects.get()
    .then(projects=>{
        res.status(200).json({ success: true, projects})
}).catch(err=>{
    res.status(500).json({success:false, message:err})
})
});

server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    dbProjects
      .get(id)
      .then(project => {
        if (project.length === 0) {
          res.status(404).json({success:false,message:'The project with the specified ID does not exist.'});
          return;
        }
        res.json(project);
      })
      .catch(error => {
        res.status(500).json({message:'The project information could not be retrieved.'});
      });
  });

  server.post('/api/projects',(req,res)=>{
    const { name,description} = req.body;
    if(!name || !description) {
        res.status(400).json({message:"Please provide a name, and description for the post."})
        return;
    }
    
    dbProjects
    .insert({
        name,description
    })
    .then(response =>{
        res.status(201).json(response)
    }).catch(err=>{
        res.status(400).json({message: err})
        return;
    });
});

server.delete('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    dbProjects
      .remove(id)
      .then(response => {
        if (response === 0) {
          res.status(404).json({message:'The project with the specified ID does not exist.'});
          return;
        }
        res.json({ success: true,message:`project with id: ${id} removed from system` });
      })
      .catch(error => {
        res.status(500).json({message:'The project could not be removed'});
        return;
      });
  });

  server.put('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    if (!name || !description) {
      res.status(400).json({message:'Must provide name and description'});
      return;
    }
    dbProjects
      .update(id, { name, description })
      .then(response => {
        if (response == 0) {
            res.status(404).json({message:'The project with the specified ID does not exist.'});
          return;
        }
        dbProjects
          .get(id)
          .then(project => {
            if (project.length === 0) {
              res.status(404).json({message:'project with that id not found'});
              return;
            }
            res.json(project);
          })
          .catch(error => {
            res.status(500).json({message:'Error looking up project'});
          });
      })
      .catch(error => {
        res.status(500).json({message:'The project information could not be modified.'});
        return;
      });
  });










server.listen(8000,()=>{
    console.log('\n*** Running on port 8000 ***\n');
})
