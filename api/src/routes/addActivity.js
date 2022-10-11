const express = require("express");
const { Activity, Country } = require("../db");


const addActivity = express.Router();

const getById = async (id) => {
    return await Activity.findByPk(id);
  };

addActivity.get("/", async (req, res) => {
  try {
    const activities = await Activity.findAll({ include: Country });
    console.log(activities);
    if (activities.length>0) {
      return res.json(activities);
    } else if (activities.length === 0) {
      return res.send("No activities found, create one");
    }
  } catch (error) {
    console.log(error);
  }
});

// ROUTE POST - DONE!
addActivity.post("/", async (req, res) => {
  const { nombre, dificulty, duration, temporada, countries } = req.body;
 
  try {
    const newActivity = await Activity.create({
        nombre,
        dificulty,
        duration,
        temporada,
    });
    countries.forEach(async (country) => {

      await newActivity.addCountry(country);
    });
    return res.status(200).send(newActivity);
  } catch (error) {

    console.log(error);
  }
});

// ROUTE DELETE - DONE
addActivity.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const activity = getById(id);
    if (activity) {
      await Activity.destroy({
        where: { id: id },
      });
    }
    res.status(200).send(`${id} deleted from db`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// ROUTE EDIT - ?
addActivity.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  try {
    const activity = await Activity.update(body, {
      where: { id: id },
    });
    res.status(200).send(activity).data;
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = addActivity;
