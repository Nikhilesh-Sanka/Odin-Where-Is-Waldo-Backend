const { Router } = require("express");
const queries = require("../queries/queries.js");

const router = Router();

router.get("/", async (req, res) => {
  const gameId = parseInt(req.query["gameId"]);
  const result = await queries.getLeaderBoard(gameId);
  console.log(result);
  res.status(200).json(result);
});
router.post("/", async (req, res) => {
  const gameInfoId = req.body["gameInfoId"];
  const name = req.body["name"];
  console.log(req.body);
  await queries.addToLeaderBoard(gameInfoId, name);
  res.sendStatus(200);
});

module.exports = router;
