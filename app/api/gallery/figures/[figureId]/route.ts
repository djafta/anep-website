import { NextRequest } from "next/server";
import { deleteFigure } from "@/services/figure.service";

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ figureId: string }> }) {
  const { figureId } = await params;
  await deleteFigure({ publicId: figureId });
  return new Response(null, { status: 200 });
}