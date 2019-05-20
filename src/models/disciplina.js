import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  ch: {
    type: Number,
    required: true,
    trim: true
  },
  curso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Curso'
  }
});

const Disciplina = mongoose.model('Disciplina', schema);

export default Disciplina;
