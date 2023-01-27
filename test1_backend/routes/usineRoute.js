const express = require("express");

const router =express.Router();

const {displayusine,addusine,updateusine,deleteusine} =require("../Controllers/usineController");

router.get("/afficher",displayusine);

router.post("/ajouter",addusine);

router.put("/maj/:id",updateusine);

router.delete("/supprimer/:id",deleteusine);

module.exports = router;