module.exports = {
  exportPathMap: async () => {
    // Exports listed pages
    return {
      '/': { page: '/' },
    };
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  }
}
