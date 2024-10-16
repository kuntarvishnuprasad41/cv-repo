import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") || "";

  
  const subdomain = hostname.split(".")[0];
  const hostLen = hostname.split(".").length < 2;
  console.log("hn:", !hostLen);

  if (subdomain !== "www" && !hostLen) {
    url.pathname = `/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
