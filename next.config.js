/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir is now stable and no longer needs to be in experimental
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: 'out'
}

module.exports = nextConfig

