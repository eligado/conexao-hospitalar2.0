-- CreateTable
CREATE TABLE "Locations" (
    "id" TEXT NOT NULL,
    "icon" VARCHAR(50) NOT NULL,
    "lat" DECIMAL(10,8) NOT NULL,
    "lng" DECIMAL(11,8) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "time" VARCHAR(100) NOT NULL,
    "address" VARCHAR(255) NOT NULL,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("id")
);
