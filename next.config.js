/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'paxcatholictv.org',
      port: '',
      pathname: '/assets/**'
    }]
  },
}

module.exports = nextConfig
