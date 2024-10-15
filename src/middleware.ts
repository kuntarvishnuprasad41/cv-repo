import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") || "";

  console.log("hostname", hostname);

  if (hostname.startsWith("blogs")) {
    url.pathname = `/blogs${url.pathname}`;
    return NextResponse.rewrite(url);
  }
  console.log("middleware");

  return NextResponse.next();
}
