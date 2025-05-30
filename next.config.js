/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
            },
            {
                protocol: 'https',
                hostname: 'wp.vishnuprasadkuntar.me',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'wordpress.sscinitiatives.com',
            },
        ],
    },
};

module.exports = nextConfig;
