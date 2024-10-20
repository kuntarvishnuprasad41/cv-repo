import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") || "";

  const subdomain = hostname.split(".")[0];
  const hostLen = hostname.split(".").length;
 
  

  if (
    (subdomain !== "www" &&
      subdomain == "localhost:3000" &&
      hostLen > 2 &&
      hostname.split(".")[1] != "vercel") ||
    hostname.split(".")[1] == "localhost:3000"
  ) {
    url.pathname = `/${subdomain}${url.pathname}`;

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
