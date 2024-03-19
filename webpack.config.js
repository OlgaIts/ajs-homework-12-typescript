/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('node:path');

module.exports = {
  output: {
    path: path.resolve(_dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /nodemodules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
