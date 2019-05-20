class TurmaController {
  constructor(Turma) {
    this.Turma = Turma;
  }

  async get(req, res) {
    try {
      const turmas = await this.Turma.find({}, '_id codigo sala vagas');
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

  create(req, res) {
    const turma = new this.Turma(req.body);
    return turma
      .save()
      .then(() => res.status(201).send('Success'))
      .catch(err => {
        console.error(err);
        res.status(422).send(err.message);
      });
  }

  update(req, res) {
    return this.Turma.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(422).send(err.message));
  }

  remove(req, res) {
    return this.Turma.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(204))
      .catch(err => res.status(400).send(err.message));
  }
}

export default TurmaController;
