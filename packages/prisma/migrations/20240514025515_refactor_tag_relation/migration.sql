/*
  Warnings:

  - You are about to drop the `_tagTotask` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_tagTotask" DROP CONSTRAINT "_tagTotask_A_fkey";

-- DropForeignKey
ALTER TABLE "_tagTotask" DROP CONSTRAINT "_tagTotask_B_fkey";

-- DropTable
DROP TABLE "_tagTotask";