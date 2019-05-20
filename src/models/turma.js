import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true,
    trim: true
  },
  sala: {
    type: String,
    required: true,
    trim: true
  },
  vagas: {
    type: Number,
    required: true,
    trim: true
  },
  curso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Curso'
  }
});

const Turma = mongoose.model('Turma', schema);

export default Turma;
