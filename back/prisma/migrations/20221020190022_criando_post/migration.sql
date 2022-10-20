-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "post" VARCHAR(255) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
