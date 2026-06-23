import { NextRequest } from "next/server";
import { unpublishFigure } from "@/services/figure.service";

export async function POST(request: NextRequest, { params }: { params: Promise<{ figureId: string }> }) {
  const { figureId } = await params;
  await unpublishFigure({ publicId: figureId });

  return new Response(null, { status: 200 });
}