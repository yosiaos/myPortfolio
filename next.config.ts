/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/myPortfolio',
  assetPrefix: '/myPortfolio/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
