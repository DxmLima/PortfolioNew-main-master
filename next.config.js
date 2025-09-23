const { hostname } = require('os');
const path = require('path');

module.exports = {

  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com', 'www.behance.net', 'aceternity.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media',
          outputPath: 'static/media',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};
