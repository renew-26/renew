/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/renew' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/renew' : '',
};

export default nextConfig;
