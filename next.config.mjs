/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    i18n: {
      locales: ['tr', 'en'],
      defaultLocale: 'tr',
    },
  }

export default nextConfig;
