const express = require("express");
const toys = require("../data/toys.json");

const router = express.Router();

router.route("/").get((req, res) => res.send("Welcome to the products page"));

router
  .route("/toys")
  .get((req, res) => res.json(toys))
  .post((req, res) =>
    res.send("POST: This is where you could add a toy to products/toys")
  )
  .put((req, res) => res.send("PUT: Here you could update the toys..."))
  .delete((req, res) =>
    res.send("DELETE: Here you could delete the toys array")
  );

router
  .route("/toys/:toy")
  .get((req, res) => {
    const found = toys.some((toy) => toy.id === parseInt(req.params.toy));

    if (found) {
      return res.json(
        toys.filter((toy) => toy.id === parseInt(req.params.toy))
      );
    }
    return res
      .status(400)
      .json({ msg: `Sorry, no toy with the id ${req.params.toy} found` });
  })
  .post((req, res) =>
    res.send("POST: Here you could add a new property for example")
  )
  .put((req, res) => res.send("PUT: Here you can update a specific item"))
  .delete((req, res) => res.send("DELETE: delete an item"));

module.exports = router;
