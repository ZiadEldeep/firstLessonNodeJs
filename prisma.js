const { PrismaClient } = require("@prisma/client");

// Use globalThis for compatibility across environments
const globalForPrisma = globalThis;

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // Logging options for debugging
  });

// Export the prisma client instance
module.exports = { prisma };

// In development mode, persist Prisma client across hot-reloads
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
