// import ts from 'typescript';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import nodeGlobals from 'rollup-plugin-node-globals';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.tsx',
  output: {
    format: 'cjs',
    sourcemap: true,
    globals: { react: 'React', 'react-native': 'ReactNative' },
    // exports: 'named',
    dir: __dirname + '/dist',
    entryFileNames: '[name].esm.js',
    external: ['core-js'],
  },
  // preserveModules: true,
  plugins: [
    nodeResolve({
      preferBuiltins: true,
      mainFields: ['module', 'main', 'browser'].filter(Boolean),
      // defaults + .jsx
      extensions: ['.mjs', '.js', '.jsx', '.json', '.node'],
    }),
    commonjs({
      // We need this so because of the mono repo structure
      // https://github.com/rollup/rollup-plugin-commonjs/issues/361
      include: /\/node_modules\//,
      extensions: ['.js', '.ts'],
    }),
    typescript(),
    // To be able to import json files
    json(),
    nodeGlobals(),
    babel({ babelHelpers: 'bundled' }),
  ],
};
