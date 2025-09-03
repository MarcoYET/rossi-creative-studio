/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      // add any other external image hosts you use with <Image src="https://...">
    ],
  },
  // CSP handled by src/middleware.ts
};

export default nextConfig;
