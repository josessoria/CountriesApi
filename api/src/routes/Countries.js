const express = require("express");
const { Op } = require("sequelize");
const Countries = express.Router();
const { Country, Activity } = require("../db.JS");
require("dotenv").config();

Countries.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const ResultQuery = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: name + "%",
          },
        },
        include: Activity,
      });

      return ResultQuery.length
        ? res.json(ResultQuery)
        : res.status(500).json({ message: `${name} no existe` });
    } else {
      const allCountries = await Country.findAll({
        attributes: [
          "id",
          "name",
          "flags",
          "continente",
          "poblacion",
          "capital",
          "area",
          "subregion",
        ],
        include: Activity,
      });
      return res.status(200).json(allCountries);
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

Countries.get("/:id", async (req, res) => {
    const {id} = req.params
    const paramsId = await Country.findByPk(id.toUpperCase(),{
        include: Activity,
    } )

    if(!paramsId) return res.status(500).send("El pais no fue encontrado")
    res.json(paramsId)

});

module.exports = Countries;
