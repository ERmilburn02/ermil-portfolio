import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/types";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const supabase = createRouteHandlerClient<Database>({ cookies });

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", params.slug)
    .single();

  if (error) {
    if (error.code == "PGRST116") {
      return new NextResponse(null, { status: 404 });
    }

    console.error(error);
    return new NextResponse(null, { status: 500 });
  } else if (data) {
    const markdownUrl = supabase.storage
      .from("portfolio-public-data")
      .getPublicUrl(`projects/${data.post_content_link}`).data.publicUrl;
    const markdownResponse = await fetch(markdownUrl);
    const markdownText = await markdownResponse.text();

    return new NextResponse(markdownText, {
      headers: { "Content-Type": "text/markdown" },
    });
  }
}
