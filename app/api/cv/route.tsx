import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import { CVPdf } from "../../../components/CVPdf";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = (searchParams.get("lang") as "pt" | "en") || "en";

  const stream = await renderToStream(<CVPdf lang={lang} />);

  return new NextResponse(stream as any, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=Gabriel_Sassaki_CV.pdf",
    },
  });
}
