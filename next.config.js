/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/blog',  // 这里填你的GitHub仓库名
  assetPrefix: '/blog/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 