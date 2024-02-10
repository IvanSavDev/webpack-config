import webpack from 'webpack';
import path from 'path';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildPaths, BuildPlatform } from './config/build/types/types';
import { env } from 'process';

type EnvVariables = {
  mode: 'production' | 'development';
  port: number;
  platform: BuildPlatform;
};

export default ({ mode, port, platform }: EnvVariables) => {
  const isDev = mode ? mode === 'development' : true;
  const isProd = mode === 'production';

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpack({
    isDev,
    isProd,
    port,
    mode,
    paths,
    platform: platform ?? 'desktop',
  });

  return config;
};
