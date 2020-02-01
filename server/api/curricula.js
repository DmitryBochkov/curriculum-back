const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { Curriculum } = require('@db')


// {
//   "name": "sql",
//   "description": "sql description",
//   "goal": "sql goal",
//   "sections": [
//     ""
//   ]
// }

router.get('/', async function (req, res) {
  const curricula = await Curriculum.find()
  res.send(curricula)
})

router.post('/', async function (req, res) {
  const { name, description, goal, sections } = req.body

  const curriculum = new Curriculum({
    name,
    description,
    goal,
    sections
  })
  await curriculum.save()
  res.send(201, 'Success')
})

router.get('/:id', function (req, res) {
  res.send(req.params)
})

router.patch('/:id', function (req, res) {
  res.send('Got a POST request')
})

router.delete('/:id', function (req, res) {
  res.send('Got a POST request')
})

module.exports = router
