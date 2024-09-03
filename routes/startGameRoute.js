const { Router } = require("express");
const queries = require("../queries/queries.js");

const router = Router();

router.post("/", async (req, res) => {
  const gameId = req.body["gameId"];
  const gameInfoId = await queries.startGame(gameId);
  res.status(200).json({ gameInfoId });
});

module.exports = router;
