/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // images: {
  //   remotePatterns: [{ protocol: 'https', hostname: 'img.clerk.com' }]
  // }
  // images: {
  //   remotePatterns: [new URL('https://img.clerk.com')],
  // },
  images: {
    domains: ['img.clerk.com'],
  },
};

export default nextConfig;