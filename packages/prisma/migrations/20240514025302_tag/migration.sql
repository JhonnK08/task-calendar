-- CreateEnum
CREATE TYPE "Color" AS ENUM ('RED', 'BLUE', 'GREEN', 'YELLOW', 'ORANGE', 'PURPLE', 'PINK', 'BROWN', 'GRAY', 'BLACK');

-- CreateTable
CREATE TABLE "tag" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(15) NOT NULL,
    "color" "Color" NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags_tasks" (
    "tagId" TEXT NOT NULL,
    "taskId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_tagTotask" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "tags_tasks_tagId_idx" ON "tags_tasks"("tagId");

-- CreateIndex
CREATE INDEX "tags_tasks_taskId_idx" ON "tags_tasks"("taskId");

-- CreateIndex
CREATE UNIQUE INDEX "tags_tasks_tagId_taskId_key" ON "tags_tasks"("tagId", "taskId");

-- CreateIndex
CREATE UNIQUE INDEX "_tagTotask_AB_unique" ON "_tagTotask"("A", "B");

-- CreateIndex
CREATE INDEX "_tagTotask_B_index" ON "_tagTotask"("B");

-- AddForeignKey
ALTER TABLE "tags_tasks" ADD CONSTRAINT "tags_tasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags_tasks" ADD CONSTRAINT "tags_tasks_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tagTotask" ADD CONSTRAINT "_tagTotask_A_fkey" FOREIGN KEY ("A") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tagTotask" ADD CONSTRAINT "_tagTotask_B_fkey" FOREIGN KEY ("B") REFERENCES "task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
