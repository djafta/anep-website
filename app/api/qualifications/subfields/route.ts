import { NextResponse } from "next/server";
import { listSubfields } from "@/services/subfield.service";

export async function GET() {
  return NextResponse.json(await listSubfields())
}