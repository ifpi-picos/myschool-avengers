import express from 'express';
import CursoController from '../controllers/curso';
import Curso from '../models/curso';

const router = express.Router();

const cursoController = new CursoController(Curso);

router.get('/', (req, res) => cursoController.get(req, res));
router.get('/:id', (req, res) => cursoController.getById(req, res));
router.post('/', (req, res) => cursoController.create(req, res));
router.put('/:id', (req, res) => cursoController.update(req, res));
router.delete('/:id', (req, res) => cursoController.remove(req, res));

export default router;
