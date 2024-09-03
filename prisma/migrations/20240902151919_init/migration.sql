-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gameInfo" (
    "id" SERIAL NOT NULL,
    "sessionId" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,
    "hitTargets" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT,

    CONSTRAINT "gameInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");
