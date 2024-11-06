/*
  Warnings:

  - You are about to drop the column `resume` on the `candidate_information` table. All the data in the column will be lost.
  - Added the required column `file` to the `Candidate_information` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `candidate_information` DROP COLUMN `resume`,
    ADD COLUMN `file` VARCHAR(191) NOT NULL,
    MODIFY `years_of_experience` VARCHAR(191) NOT NULL;
