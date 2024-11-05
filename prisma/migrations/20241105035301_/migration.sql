/*
  Warnings:

  - Added the required column `quantity` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `quantity` INTEGER NOT NULL,
    ADD COLUMN `type` ENUM('VitaminKhoangChat', 'DieuTriBenhLy', 'ChamSocCaNhan') NOT NULL;
