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

  async create(req, res) {
    const curso = new this.Curso(req.body);

    try {
      await curso.save();
      res.status(201).send('Success');
    } catch (error) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.Curso.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.Curso.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (error) {
      res.status(400).send(err.message);
    }
  }
}

export default CursoController;
