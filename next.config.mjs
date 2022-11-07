/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,

  experimental: {
    images: {
      unoptimized: true,
    },
  },

  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    unoptimized: true,
  },
}
