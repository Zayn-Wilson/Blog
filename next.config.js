/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // 只在生产环境使用basePath
  basePath: process.env.NODE_ENV === 'production' ? '/blog' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/blog/' : '',
  images: {
    unoptimized: true
  },
  // 添加这些配置来解决静态导出问题
  experimental: {
    esmExternals: false
  },
  transpilePackages: ['gsap'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  }
}

module.exports = nextConfig 