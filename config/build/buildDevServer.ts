import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types';

export const buildDevServer = ({
  port,
}: BuildOptions): DevServerConfiguration => {
  return {
    port: port ?? 3000,
    open: true,
    historyApiFallback: true,
    hot: true
  };
};
