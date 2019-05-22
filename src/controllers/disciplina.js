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

  async create(req, res) {
    const disciplina = new this.Disciplina(req.body);
    try {
      disciplina.save();
      res.status(201).send('Success');
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.Disciplina.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (error) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.Disciplina.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

export default DisciplinaController;
