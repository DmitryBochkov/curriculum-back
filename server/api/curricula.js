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
  const savedCurriculum = await curriculum.save()
  res.status(201).send(savedCurriculum)
})

router.get('/:id', async function (req, res) {
  const curriculum = await Curriculum.findById(req.params.id)
  res.send(curriculum)
})

router.patch('/:id/sections/:sectionId/:type/:typeId', async function (req, res) {
  const { id, sectionId, type, typeId } = req.params
  const { isCompleted, name, url } = req.body
  const doc = await Curriculum.findById(id)
  const section = doc.sections.id(sectionId)
  let item = section[type].id(typeId)
  item.isCompleted = isCompleted
  item.name = name
  item.url = url

  await doc.save()
  // console.log(updatedItem);
  res.send(doc)
})

router.patch('/:id', async function (req, res) {
  const curriculum = await Curriculum.updateOne({ '_id': req.params.id }, {...req.body})
  res.send(curriculum)
})

router.delete('/:id', async function (req, res) {
  await Curriculum.deleteOne({ '_id': req.params.id })
  res.send(200, 'Success')
})

module.exports = router
