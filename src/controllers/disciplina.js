class DisciplinaController {
  constructor(Disciplina) {
    this.Disciplina = Disciplina;
  }

  async get(req, res) {
    try {
      const disciplinas = await this.Disciplina.find({}, '_id name ch').populate('curso', 'name');
      res.send(disciplinas);
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
      const disciplina = await this.Disciplina.findById(id, '_id name ch').populate(
        'curso',
        'name'
      );
      res.send(disciplina);
    } catch (err) {
      console.error(err);
      res.status(400).send('Error');
    }
  }

  create(req, res) {
    const disciplina = new this.Disciplina(req.body);
    return disciplina
      .save()
      .then(() => res.status(201).send('Success'))
      .catch(err => {
        console.error(err);
        res.status(422).send(err.message);
      });
  }

  update(req, res) {
    return this.Disciplina.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(422).send(err.message));
  }

  remove(req, res) {
    return this.Disciplina.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(204))
      .catch(err => res.status(400).send(err.message));
  }
}

export default DisciplinaController;
