/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir is now stable and no longer needs to be in experimental
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

