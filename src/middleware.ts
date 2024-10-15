// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   const hostname = req.headers.get("host") || "";

//   if (hostname.startsWith("blogs")) {
//     url.pathname = `/blogs${url.pathname}`;
//     return NextResponse.rewrite(url);
//   }

//   return NextResponse.next();
// }


