const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['ui']);

const nextConfig = {
  trailingSlash: false,
  webpack5: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html|\.css$/i,
      loader: 'html-loader',
      options: {
        // Disables attributes processing
        sources: false,
      },
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/r',
        destination: '/404',
      },
    ];
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = withPlugins([], withTM(nextConfig));
