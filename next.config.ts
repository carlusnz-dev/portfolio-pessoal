import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-pessoal' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-pessoal' : '',
  images: {
    path: '/public',
    unoptimized: true
  }
};

export default nextConfig;
