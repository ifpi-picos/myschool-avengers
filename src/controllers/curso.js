class CursoController {
  constructor(Curso) {
    this.Curso = Curso;
  }

  async get(req, res) {
    try {
      const cursos = await this.Curso.find({}, '_id name');
      res.send(cursos);
    } catch (err) {
      console.error(err);
      res.status(400).send('Error');
    }
  }

  async getById(req, res) {
    const {
      params: { id }
    } = req;
    try {
      const curso = await this.Curso.findById(id, '_id name');
      res.send(curso);
    } catch (err) {
      console.error(err);
      res.status(400).send('Error');
    }
  }

  create(req, res) {
    const curso = new this.Curso(req.body);
    console.log(req.body);

    return curso
      .save()
      .then(() => res.status(201).send('Success'))
      .catch(err => {
        console.error(err);
        res.status(422).send(err.message);
      });
  }

  update(req, res) {
    return this.Curso.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(422).send(err.message));
  }

  remove(req, res) {
    return this.Curso.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(204))
      .catch(err => res.status(400).send(err.message));
  }
}

export default CursoController;
