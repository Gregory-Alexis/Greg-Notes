const express = require("express");
const router = express.Router();

// const auth = require("../middleware/auth");

const noteCtrl = require("../controllers/note");

router.get("/", noteCtrl.findAllNote);
router.post("/", noteCtrl.createNote);
router.get("/:id", noteCtrl.findOneNote);
router.put("/:id", noteCtrl.modifyNote);
router.delete("/:id", noteCtrl.deleteNote);

module.exports = router;
