import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // opsional, hanya kalau kamu pakai <Image />
  },
};

export default nextConfig;
