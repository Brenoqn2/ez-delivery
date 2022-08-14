-- CreateTable
CREATE TABLE "EstablishmentsAddresses" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "EstablishmentsAddresses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EstablishmentsAddresses" ADD CONSTRAINT "EstablishmentsAddresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
