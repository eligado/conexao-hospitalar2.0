const { PrismaClient } = require('@prisma/client')

const { locations } = require('./data.js')

const prisma = new PrismaClient()

async function main() {
  await prisma.locations.createMany({
    data: locations
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
