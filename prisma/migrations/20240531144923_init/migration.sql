/*
  Warnings:

  - You are about to drop the `todoSadam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "todoSadam";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "mobil" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "merk" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
