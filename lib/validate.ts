import { z } from "zod";
import { NextResponse } from "next/server";

export function validate<T extends z.ZodTypeAny>(
  schema: T,
  data: unknown
):
  | { success: true; data: z.infer<T> }
  | { success: false; response: NextResponse } {

  const result = schema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      response: NextResponse.json(
        {
          error: "VALIDATION_ERROR",
          fields: z.treeifyError(result.error),
        },
        { status: 400 }
      ),
    };
  }

  return {
    success: true,
    data: result.data,
  };
}