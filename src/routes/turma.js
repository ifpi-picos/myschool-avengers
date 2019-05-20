import express from 'express';
import TurmaController from '../controllers/turma';
import Turma from '../models/turma';

const router = express.Router();

const turmaController = new TurmaController(Turma);

router.get('/', (req, res) => turmaController.get(req, res));
router.get('/:id', (req, res) => turmaController.getById(req, res));
router.post('/', (req, res) => turmaController.create(req, res));
router.put('/:id', (req, res) => turmaController.update(req, res));
router.delete('/:id', (req, res) => turmaController.remove(req, res));

export default router;
