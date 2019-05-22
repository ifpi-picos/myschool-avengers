class TurmaController {
  constructor(Turma) {
    this.Turma = Turma;
  }

  async get(req, res) {
    try {
      const turmas = await this.Turma.find({}, '_id codigo sala vagas').populate('curso', 'name');
      res.send(turmas);
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
      const turma = await this.Turma.findById(id, '_id codigo sala vagas').populate(
        'curso',
        'name'
      );
      res.send(turma);
    } catch (err) {
      console.error(err);
      res.status(400).send('Error');
    }
  }

  async create(req, res) {
    const turma = new this.Turma(req.body);
    try {
      await turma.save();
      res.status(201).send('Success');
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.Turma.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.Turma.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

export default TurmaController;
