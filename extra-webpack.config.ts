import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import * as ProgressBarPlugin from 'progress-bar-webpack-plugin';

// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

export default {
  plugins: [
    new ProgressBarPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: 'localhost',
      analyzerPort: 3000,
    }),
  ],
} as Configuration;
