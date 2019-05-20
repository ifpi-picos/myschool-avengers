import express from 'express';
import usuariosRoute from './users';
import cursoRoute from './curso';
import turmaRoute from './turma';
import disciplinaRoute from './disciplina';

const router = express.Router();

router.use('/users', usuariosRoute);
router.use('/curso', cursoRoute);
router.use('/turma', turmaRoute);
router.use('/disciplina', disciplinaRoute);
router.get('/', (req, res) => res.send('App Online!'));

export default router;
