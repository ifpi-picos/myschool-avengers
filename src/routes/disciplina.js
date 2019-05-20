import express from 'express';
import DisciplinaController from '../controllers/disciplina';
import Disciplina from '../models/disciplina';

const router = express.Router();

const disciplinaController = new DisciplinaController(Disciplina);

router.get('/', (req, res) => disciplinaController.get(req, res));
router.get('/:id', (req, res) => disciplinaController.getById(req, res));
router.post('/', (req, res) => disciplinaController.create(req, res));
router.put('/:id', (req, res) => disciplinaController.update(req, res));
router.delete('/:id', (req, res) => disciplinaController.remove(req, res));

export default router;
