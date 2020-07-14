module.exports = {
  rollup(config, opts) {
    console.log(opts.format);
    if (opts.format === 'esm') {
      const newConfig = {
        ...config,
        preserveModules: true,
        output: {
          ...config.output,
          dir: __dirname + '/dist',
          entryFileNames: '[name].esm.js',
          file: undefined
        },
      };
      return newConfig;
    }
    return config;
  },
};
