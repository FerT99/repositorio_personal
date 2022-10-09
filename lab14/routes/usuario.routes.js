const express = require('express');
const path = require('path');
const filesystem = require('fs');
const router = express.Router();

const usuario_controller = require("../controllers/usuario.controller");

router.get('/usuario', usuario_controller.getLogin);
// router.post('/login', usuario_controller.login);
router.get('/usuario', usuario_controller.logout);

module.exports = router;