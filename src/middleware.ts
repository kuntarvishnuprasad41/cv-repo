import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") || "";

  // Don't rewrite static files like CSS, JS, and images
  if (url.pathname.startsWith("/_next") || url.pathname.startsWith("/static")) {
    return NextResponse.next();
  }

  const subdomain = hostname.split(".")[0];
  const hostLen = hostname.split(".").length;

  if (
    subdomain !== "www" &&
    hostLen > 2 &&
    hostname.split(".")[1] != "vercel"
  ) {
    url.pathname = `/${subdomain}${url.pathname}`;

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
