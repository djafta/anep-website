import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth-user";
import { validate } from "@/lib/validate";
import { createFigure, createFigureSchema } from "@/services/figure.service";

export async function GET() {
  const user = await getAuthUser();

  if (!user) {
    const figures = await prisma.figure.findMany({
      where: {
        publishedAt: {
          not: null
        },
        deletedAt: null
      },
      orderBy: {
        sortOrder: 'asc'
      }
    });

    return NextResponse.json(figures);
  }

  const figures = await prisma.figure.findMany({
    where: {
      deletedAt: null
    },
    orderBy: {
      sortOrder: 'asc'
    }
  });
  return NextResponse.json(figures);
}

export async function POST(request: NextRequest) {
  const user = await getAuthUser();

  if (!user || user.scopes.includes('create:figures')) {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }

  const formData = await request.formData();

  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json(
      { error: "FILE_REQUIRED" },
      { status: 400 }
    );
  }

  const body = {
    title: formData.get("title"),
    description: formData.get("description") ?? undefined,
    sortOrder: formData.get("sortOrder") ? Number(formData.get("sortOrder")) : undefined,
    publish: formData.get("publish"),
    categories: formData.get("categories"),
  };

  const result = validate(createFigureSchema, body);

  if (!result.success) {
    return result.response;
  }

  const figure = await createFigure({ data: result.data, file });

  return NextResponse.json(figure);
}