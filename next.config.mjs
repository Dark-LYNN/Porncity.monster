/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'nl-NL'],
        defaultLocale: 'en-US',
        localeDetection: false,
    },
    images: {
        domains: ['cdn.discordapp.com', 'cdn.lynnux.xyz'],
    },
};

export default nextConfig;
