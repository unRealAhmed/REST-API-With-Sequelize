const express = require('express');
const router = express.Router()
const Task = require('./models');

router.get('/todos', async (request, response) => {
  const tasks = await Task.findAll();

  response.status(200).json(tasks);
  // response.json("success")
});

router.post('/todos', async (request, response) => {
  const { content, description } = request.body;
  try {
    const newTask = await Task.create({
      'content': content,
      'description': description
    })
    response.status(201).json(newTask);
  }
  catch (error) {
    response.json(error)
  }
  // response.json("success")
});

router.get('/todo/:id', async (request, response) => {
  const task = await Task.findOne({
    where: {
      id: request.params.id
    }
  });

  response.status(200).json(task)
  // response.json("success")
});

router.patch('/todo/:id', async (request, response) => {
  const task = await Task.findOne({
    where: {
      id: request.params.id
    }
  });

  const { is_complete } = request.body;

  await task.set(
    {
      is_complete
    }
  )

  await task.save();

  response.status(200).json(task);
  // response.json("success")

});

router.delete('/todo/:id', async (request, response) => {
  const task = await Task.findOne({
    where: {
      id: request.params.id
    }
  });

  await task.destroy();

  response.status(204).json({});
  // response.json("success")

});

module.exports = router;