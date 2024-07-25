const express = require("express");
const userCtrl = require("../controllers/user");
const isAuthenticated = require("../middleware/isAuth");

const router = express.Router();

//!Register
router.post("/api/users/register", userCtrl.register);
router.post("/api/users/login", userCtrl.login);
router.get("/api/users/profile", isAuthenticated, userCtrl.profile);

module.exports = router;