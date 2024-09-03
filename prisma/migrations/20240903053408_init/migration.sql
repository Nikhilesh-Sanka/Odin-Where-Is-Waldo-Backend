/*
  Warnings:

  - You are about to drop the column `details` on the `LeaderBoard` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LeaderBoard" DROP COLUMN "details";

-- CreateTable
CREATE TABLE "Cell" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "leaderBoardId" INTEGER NOT NULL,

    CONSTRAINT "Cell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameInfo" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "hitTargets" INTEGER[],
    "endTime" TEXT,

    CONSTRAINT "GameInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cell" ADD CONSTRAINT "Cell_leaderBoardId_fkey" FOREIGN KEY ("leaderBoardId") REFERENCES "LeaderBoard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
