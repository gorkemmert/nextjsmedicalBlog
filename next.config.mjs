/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
  },
  trailingSlash: true,
  exportTrailingSlash: true,
};

export default nextConfig;
