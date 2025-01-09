const { PrismaClient } = require("@prisma/client");

const globalForPrisma = global 

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });

  module.exports = { prisma };
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;