/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: { styledComponents: true },
    pageExtensions: ["tsx"],
};

module.exports = nextConfig;
