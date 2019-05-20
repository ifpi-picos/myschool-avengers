import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Curso = mongoose.model('Curso', schema);

export default Curso;
