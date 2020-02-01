const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/curriculumapp', {useNewUrlParser: true});

const Curriculum = require('./Curriculum')

// const curriculum = new Curriculum({ name: 'Python' });
// curriculum.save().then(() => console.log('curriculum'));
module.exports = {
  Curriculum
}
