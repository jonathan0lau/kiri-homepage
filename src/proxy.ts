import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { hasLocale, type Locale } from "@/i18n/dictionaries";

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get("kiri-locale")?.value;
  if (saved && hasLocale(saved)) return saved;

  return "ja";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (hasLocale(firstSegment)) return NextResponse.next();

  const locale = preferredLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images/|og.jpg|.*\\..*).*)"],
};
