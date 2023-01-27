const express = require("express");

const router =express.Router();

const {displayMachine,addMachine,updateMachine,deleteMachine} =require("../Controllers/machineController");

router.get("/afficher",displayMachine);

router.post("/ajouter",addMachine);

router.put("/maj/:id",updateMachine);

router.delete("/supprimer/:id",deleteMachine);

module.exports = router;