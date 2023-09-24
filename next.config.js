/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        BASE_URL: "https://agency.teamrabbil.com/api",
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'agency.teamrabbil.com',
                port: '',
                pathname: '/files/**',
            },
        ],
    },
}

module.exports = nextConfig