const express = require("express");
const cors = require("cors");
const expressSession = require("express-session");
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const { PrismaClient } = require("@prisma/client");

// configuring dotenv
require("dotenv").config();

// importing internal modules
const queries = require("./queries/queries.js");
const startGameRouter = require("./routes/startGameRoute.js");
const hitTargetRouter = require("./routes/hitTargetRoute.js");
const leaderBoardRouter = require("./routes/leaderBoardRoute.js");

const app = express();

// enabling cors
app.use(cors());

//decoding requests
app.use(express.json());

// setting up the session
app.use(
  expressSession({
    cookie: {
      maxAge: 7 * 24 * 20 * 60 * 1000,
    },
    secret: "it's a secret",
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

// setting up the routes

//************ getting the preview details of the games
app.get("/previewDetails", async (req, res) => {
  const previewDetails = await queries.getPreviewDetails();
  res.status(200).json(previewDetails);
});

//************ getting the specific game details
app.get("/game", async (req, res) => {
  const gameId = req.query["gameId"];
  const game = await queries.getGame(gameId);
  if (game) {
    res.status(200).json(game);
  } else {
    res.sendStatus(404);
  }
});

//************ setting up the game info
app.use("/startGame", startGameRouter);

//************ hitting the target
app.use("/hitTarget", hitTargetRouter);

//************ adding the player to the leader board
app.use("/leaderBoard", leaderBoardRouter);

app.listen(process.env.PORT);
