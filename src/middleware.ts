import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") || "";

  console.log("hn:", hostname, "\n url:", url);

  if (hostname.startsWith("blog")) {
    // Rewrite to the blogs section
    url.pathname = `/blog${url.pathname}`;
    return NextResponse.rewrite(url);
  }
  if (hostname.startsWith("cv")) {
    // Rewrite to the blogs section
    url.pathname = `/cv${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
