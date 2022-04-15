/*
  Warnings:

  - Added the required column `description` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tierLevel` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('SERVICE', 'NON_INVENTORY');

-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "company" TEXT;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "tierLevel" TEXT NOT NULL,
ADD COLUMN     "type" "Type" NOT NULL DEFAULT E'SERVICE';
