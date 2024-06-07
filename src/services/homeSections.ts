import prisma from '../../prisma'

export async function getHomeSections() {
  return prisma.homeBg.findFirst({
    include: {
      aboutMaldivesShort: true,
      services: true,
      aboutUsShort: true,
      wonders: true,
      collections: true,
      brands: true,
      socialLinkSection: true,
      header: true,
    },
  })
}
