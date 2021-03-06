const express = require('express');

const rotaService = require('./rota.service');
const rotaSchema = require('./rota.schema');
const validate = require('../validators');
const { needsAuth } = require('../auth');

const router = express.Router();

router.get('/upcoming', needsAuth(), async (req, res, next) => {
  try {
    const rotaList = await rotaService.listUpcoming(req.user.id);
    res.json(rotaList);
  } catch (e) {
    next(e);
  }
});

router.post('/', needsAuth(), async (req, res, next) => {
  try {
    validate(req.body, rotaSchema);
    const rota = await rotaService.create();
    res.status(201).json(rota);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
