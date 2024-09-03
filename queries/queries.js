const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getPreviewDetails() {
  const result = await prisma.game.findMany({
    select: {
      id: true,
      name: true,
      image_url: true,
    },
  });
  return result;
}
async function getGame(gameId) {
  const processedGameId = parseInt(gameId);
  const result = await prisma.game.findUnique({
    where: {
      id: processedGameId,
    },
    include: {
      instructions: {
        select: {
          id: true,
          instruction: true,
          image_url: true,
        },
      },
    },
  });
  return result;
}
async function startGame(gameId) {
  const startTime = `${new Date().getTime() / 1000}`;
  const processedGameId = parseInt(gameId);
  const result = await prisma.gameInfo.create({
    data: {
      startTime: startTime,
      gameId: processedGameId,
    },
  });
  return result.id;
}
async function checkHit(gameInfoId, instructionId, hitCoordinates) {
  const gameInfo = await prisma.gameInfo.findUnique({
    where: {
      id: gameInfoId,
    },
  });
  if (gameInfo.hitTargets.includes(instructionId)) {
    return false;
  }
  const instruction = await prisma.instruction.findUnique({
    where: {
      id: instructionId,
    },
  });
  const isInXRange =
    JSON.parse(instruction["x_coordinate"])[0] <= hitCoordinates[0] &&
    JSON.parse(instruction["x_coordinate"])[1] >= hitCoordinates[0];
  const isInYRange =
    JSON.parse(instruction["y_coordinate"])[0] <= hitCoordinates[1] &&
    JSON.parse(instruction["y_coordinate"])[1] >= hitCoordinates[1];
  if (isInXRange && isInYRange) {
    if (gameInfo.hitTargets.length === 2) {
      const endTime = `${new Date().getTime() / 1000}`;
      await prisma.gameInfo.update({
        where: {
          id: gameInfo.id,
        },
        data: {
          endTime: endTime,
          hitTargets: [...gameInfo.hitTargets, instruction.id],
        },
      });
    } else {
      await prisma.gameInfo.update({
        where: {
          id: gameInfo.id,
        },
        data: {
          hitTargets: [...gameInfo.hitTargets, instruction.id],
        },
      });
    }
    return true;
  }
  return false;
}
async function addToLeaderBoard(gameInfoId, name) {
  const gameInfo = await prisma.gameInfo.findUnique({
    where: {
      id: gameInfoId,
    },
  });
  const game = await prisma.game.findUnique({
    where: {
      id: gameInfo.gameId,
    },
  });
  const leaderBoardId = game.leaderBoardId;
  const time = parseFloat(gameInfo.endTime) - parseFloat(gameInfo.startTime);
  await prisma.cell.create({
    data: {
      name: name,
      time: time,
      leaderBoard: {
        connect: { id: leaderBoardId },
      },
    },
  });
}
async function getLeaderBoard(gameId) {
  const result = await prisma.leaderBoard.findFirst({
    where: {
      game: {
        id: gameId,
      },
    },
    include: {
      cells: {
        orderBy: {
          time: "asc",
        },
      },
    },
  });
  return result.cells;
}

module.exports = {
  getPreviewDetails,
  getGame,
  startGame,
  checkHit,
  addToLeaderBoard,
  getLeaderBoard,
};
