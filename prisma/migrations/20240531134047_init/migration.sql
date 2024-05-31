/*
  Warnings:

  - You are about to drop the `mobil` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "mobil";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "todoSadam" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "task" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
