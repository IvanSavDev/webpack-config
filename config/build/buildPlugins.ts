import { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { BuildOptions } from './types';

export const buildPlugins = ({
  isProd,
  isDev,
  paths,
  platform,
}: BuildOptions): Configuration['plugins'] => [
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  isProd &&
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  new DefinePlugin({
    __PLATFORM__: JSON.stringify(platform),
  }),
  isDev && new ForkTsCheckerWebpackPlugin(),
  isDev && new ReactRefreshWebpackPlugin(),
];
