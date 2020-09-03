import {
  externals,
  inputs,
  outputs,
  plugins
} from '@feizheng/webpack-lib-kits';
import merge from 'webpack-merge';
import baseConfig from './base';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactTree'
  }),
  devtool: 'source-map',
  externals: externals.base({
    '@feizheng/next-tree-walk': '@feizheng/next-tree-walk'
  }),
  plugins: [plugins.banner(), plugins.clean(), plugins.copyStyles()]
});
