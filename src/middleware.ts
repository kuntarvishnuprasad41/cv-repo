import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") || "";

  const subdomain = hostname.split(".")[0];
  const hostLen = hostname.split(".").length;
 

  if (subdomain !== "www" && hostLen > 2) {
    url.pathname = `/${subdomain}${url.pathname}`;
    console.log("patj", url.pathname);

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
