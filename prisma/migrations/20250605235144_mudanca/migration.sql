/*
  Warnings:

  - You are about to drop the column `ReleaseDate` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `releaseDate` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Movie` DROP COLUMN `ReleaseDate`,
    ADD COLUMN `releaseDate` DATETIME(3) NOT NULL;
