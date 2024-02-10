import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildDevServer } from './buildDevServer';
import { buildLoader } from './buildLoders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types';

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
  const { mode, isDev, paths } = options;

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    // entry: {
    //   index: {
    //     import: options.index,
    //     dependOn: 'shared',
    //   },
    //   another: {
    //     import: options.module,
    //     dependOn: 'shared',
    //   },
    //   shared: 'lodash',
    // },
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoader(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
