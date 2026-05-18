import type {NextConfig} from 'next';
import path from 'path';

const REPO_NAME = 'conduccion_test';
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? `/${REPO_NAME}` : '',
  assetPrefix: isGithubPages ? `/${REPO_NAME}/` : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    if (isGithubPages) {
      config.resolve.alias = {
        ...config.resolve.alias,
        [path.resolve(__dirname, 'src/ai/flows/traffic-law-advisor')]: path.resolve(
          __dirname,
          'src/ai/flows/traffic-law-advisor.static.ts'
        ),
        [path.resolve(__dirname, 'src/ai/flows/intelligent-review-mode')]: path.resolve(
          __dirname,
          'src/ai/flows/intelligent-review-mode.static.ts'
        ),
      };
    }
    return config;
  },
};

export default nextConfig;
