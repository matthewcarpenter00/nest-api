-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "quickbooksId" TEXT;

-- AlterTable
ALTER TABLE "order-items" ALTER COLUMN "notes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "quickbooksId" TEXT;
