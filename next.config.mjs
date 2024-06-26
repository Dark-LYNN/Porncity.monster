// @/next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Support for YAML files
    config.module.rules.push({
      test: /\.yaml$/,
      use: 'yaml-loader',
    });

    return config;
  },
  i18n: {
    locales: ['en-US', 'nl-NL', 'tr-TR'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      // port: '443',   Use a port   
      // pathname: '/images/*', Use path name
      },
      {
        protocol: 'https',
        hostname: 'cdn.lynnux.xyz',
      },
    ],
  },
};

export default nextConfig;
