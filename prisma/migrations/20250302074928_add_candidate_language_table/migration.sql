-- CreateEnum
CREATE TYPE "Level" AS ENUM ('NATIVE', 'FLUENT', 'BASIC');

-- CreateTable
CREATE TABLE "CandidateLanguage" (
    "id" SERIAL NOT NULL,
    "candidateProfileId" INTEGER NOT NULL,
    "level" "Level" NOT NULL DEFAULT 'BASIC',
    "languageId" INTEGER NOT NULL,

    CONSTRAINT "CandidateLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CandidateLanguage_languageId_candidateProfileId_key" ON "CandidateLanguage"("languageId", "candidateProfileId");

-- AddForeignKey
ALTER TABLE "CandidateLanguage" ADD CONSTRAINT "CandidateLanguage_candidateProfileId_fkey" FOREIGN KEY ("candidateProfileId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateLanguage" ADD CONSTRAINT "CandidateLanguage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
