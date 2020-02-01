const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

router.get('/', function (req, res) {
  res.send('Hello curricula!')
})

router.post('/', function (req, res) {
  res.send('Got a POST request')
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
