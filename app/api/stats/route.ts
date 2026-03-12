import { prisma } from "@/lib/prisma";

export async function GET() {
  const qualifications = await prisma.qualification.count({
    where: {
      deletedAt: null
    }
  })

  const fields = await prisma.field.count({
    where: {
      deletedAt: null
    }
  })

  const subfields = await prisma.subfield.count({
    where: {
      deletedAt: null
    }
  })

  return Response.json({
    qualifications,
    fields,
    subfields
  })
}