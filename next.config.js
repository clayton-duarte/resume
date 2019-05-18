module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/resume' : '',
  exportPathMap: async () => {
    return {
      '/': { page: '/' },
    };
  },
  webpack: config => {
    config.node = {
      fs: 'empty'
    };

    return config;
  }
}
