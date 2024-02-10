import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypescript from 'react-refresh-typescript';

import { BuildOptions } from './types';
import { buildBabelLoader } from './babel/buildBabelLoader';

export const buildLoader = (options: BuildOptions): ModuleOptions['rules'] => {
  const { isDev } = options;

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
    },
  };

  const loader = [
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        cssLoaderWithModules,
        'sass-loader',
      ],
    },
    // {
    //   test: /\.tsx?$/,
    //   use: [
    //     {
    //       loader: 'ts-loader',
    //       options: {
    //         transpileOnly: true,
    //         getCustomTransformers: () => ({
    //           before: [isDev && ReactRefreshTypescript()].filter(Boolean),
    //         }),
    //       },
    //     },
    //   ],
    //   exclude: /node_modules/,
    // },
    buildBabelLoader(options),
  ];

  return loader;
};
