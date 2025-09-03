// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const isDev = process.env.NODE_ENV !== 'production';

function makeNonce(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return btoa(String.fromCharCode(...bytes)); // Edge-safe base64
}

export function middleware(req: NextRequest) {
  const nonce = makeNonce();

  const scriptBase = [
    `'self'`,
    `'nonce-${nonce}'`,
    `'strict-dynamic'`,
    'https:',
    ...(isDev ? [`'unsafe-eval'`] : []), // dev only
  ].join(' ');

  const csp = [
    `default-src 'self'`,
    `script-src ${scriptBase}`,
    `script-src-elem ${scriptBase}`,        // cover element-loaded scripts
    `script-src-attr 'none'`,               // block inline handlers like onclick=
    `style-src 'self' 'unsafe-inline' https:`,
    `img-src 'self' data: blob: https:`,
    `font-src 'self' https: data:`,
    `connect-src 'self' https:${isDev ? ' ws: wss:' : ' wss:'}`, // allow wss: always; ws: in dev
    `media-src 'self' https:`,              // allow <video>/<audio> from self + https CDNs
    `worker-src 'self' blob:`,              // safe default for web workers
    `frame-src 'self' https://www.google.com`, // Google Maps embed; add more origins if needed
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'self'`,
    `upgrade-insecure-requests`,
  ].join('; ');

  // forward nonce to the app
  const reqHeaders = new Headers(req.headers);
  reqHeaders.set('x-nonce', nonce);

  const res = NextResponse.next({ request: { headers: reqHeaders } });
  res.headers.set('Content-Security-Policy', csp);
  res.headers.set('x-nonce', nonce);
  res.headers.set('x-mw', 'hit'); // debug
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  return res;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|site.webmanifest).*)',
  ],
};
