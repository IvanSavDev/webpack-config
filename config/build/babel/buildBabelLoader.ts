import { BuildOptions } from '../types';

export const buildBabelLoader = ({ isDev }: BuildOptions) => ({
  test: /\.tsx$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        [
          '@babel/preset-react',
          {
            runtime: isDev ? 'automatic' : 'classic',
          },
        ],
      ],
    },
  },
});
