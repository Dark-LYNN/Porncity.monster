// @/next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.yaml$/,
      use: 'yaml-loader'
    });

    return config;
  },

  i18n: {
    locales: ['en-US', 'nl-NL', 'tr-TR'],
    defaultLocale: 'en-US',
    localeDetection: false
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.lynnux.xyz'
      }
    ]
  }
};

export default nextConfig;