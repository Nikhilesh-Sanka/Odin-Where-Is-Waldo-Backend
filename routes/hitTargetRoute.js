const { Router } = require("express");
const queries = require("../queries/queries.js");

const router = Router();

router.post("/", async (req, res) => {
  const gameInfoId = req.body["gameInfoId"];
  const hitCoordinates = req.body["hitCoordinates"];
  const instructionId = req.body["instructionId"];
  const isHit = await queries.checkHit(
    gameInfoId,
    instructionId,
    hitCoordinates
  );
  if (isHit) {
    res.sendStatus(200);
  } else {
    res.sendStatus(202);
  }
});

module.exports = router;
