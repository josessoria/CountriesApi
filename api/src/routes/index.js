const express = require('express');
const Countries = require("./Countries.js")
const Activities = require("./addActivity.js")
// Importar todos los routers;



// Ejemplo: const authRouter = require('./auth.js');

const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use("/countries", Countries);
router.use("/activities", Activities);



module.exports = router;
