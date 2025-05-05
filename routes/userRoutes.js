const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);     // Get a user by ID
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
