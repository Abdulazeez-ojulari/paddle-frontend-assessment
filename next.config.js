/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '',
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}


module.exports = nextConfig
