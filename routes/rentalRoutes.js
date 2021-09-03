const express = require("express");
const router = express.Router();
const Rental = require("../models/Rentals");

// CREATE
router.post("/bookRented", (req, res) => {
  console.log("Book Rented");
  console.log(req.body);
  const newRental = new Rental({
    userId: req.body.userId,
    bookId: req.body.bookId,
  });
  newRental
    .save()
    .then((result) => {
      console.log(result);
      return res.json({ result: result });
    })
    .catch((error) => {
      console.log(error);
      return res.json({ error: error });
    });
});

// READ
// gets all the users --->
router.get("/allRentals", async (req, res) => {
  const rentals = await Rental.find();

  try {
    console.log("Got all Rental");
    return res.json(rentals);
  } catch (error) {
    return res.json({ message: "Rental could not be retrieved" });
  }
});

// gets one user specified by ID --->
router.get("/singleRental/:id", (req, res) => {
  const Rental = Rental.findById(req.params.id);
  user.then((Rental) => {
    console.log("Got Rental");
    return res.json(Rental);
  });
});

// UPDATE
router.put("/updateRental/:id", (req, res) => {
  Rental.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    console.log("Rental Updated");
    return res.json(data);
  });
});

// DELETE
router.delete("/deleteRental/:id", (req, res) => {
  Rental.findByIdAndDelete(req.params.id)
    .then(() => {
      return res.status(200).json({ message: `Rental File Deleted` });
    })
    .catch((error) => {
      return res.json({ message: `Rental could not be deleted ${error}` });
    });
});

module.exports = router;
