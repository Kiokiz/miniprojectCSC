/*
  Warnings:

  - Added the required column `harga` to the `mobil` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mobil" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "merk" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,
    "harga" INTEGER NOT NULL
);
INSERT INTO "new_mobil" ("id", "merk", "tahun", "tipe") SELECT "id", "merk", "tahun", "tipe" FROM "mobil";
DROP TABLE "mobil";
ALTER TABLE "new_mobil" RENAME TO "mobil";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
