import { NextRequest, NextResponse } from 'next/server';
import { locales, type Locale } from '@/lib/i18n/translations';

// Country code → locale mapping
const countryToLocale: Record<string, Locale> = {
  BR: 'pt-BR',
  PT: 'pt-PT',
  RO: 'ro',
  ID: 'en', // Bali / Indonesia
};

const defaultLocale: Locale = 'en';

function detectLocale(request: NextRequest): Locale {
  // Vercel provides geo data via this header
  const country = request.headers.get('x-vercel-ip-country') ?? '';
  return countryToLocale[country] ?? defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip non-page routes
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/instagram') ||
    pathname.startsWith('/brandbook') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/icon') ||
    pathname.startsWith('/apple-icon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a supported locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect root and unlocalized paths to the detected locale
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();

  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.redirect(url);
  // Store locale in cookie so root layout can set html[lang]
  response.cookies.set('NEXT_LOCALE', locale, { path: '/', sameSite: 'lax' });
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
