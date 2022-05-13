-- DropForeignKey
ALTER TABLE "order-items" DROP CONSTRAINT "order-items_orderId_fkey";

-- AddForeignKey
ALTER TABLE "order-items" ADD CONSTRAINT "order-items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
