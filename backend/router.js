const express = require('express');

const authProvider = require('./auth');
const authController = require('./auth/auth.controller');
const userController = require('./users/user.controller');
const taskController = require('./tasks/task.controller');
const rotaController = require('./rotas/rota.controller');

const router = express.Router();

authProvider.initialize(router);
router.use(express.json());
router.use('/auth', authController);
router.use('/users', userController);
router.use('/tasks', taskController);
router.use('/rotas', rotaController);

module.exports = router;
