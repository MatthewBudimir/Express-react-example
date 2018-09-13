import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './config.babel';

export default (app) => {
  const webpackCompiler = webpack(webpackConfig);
  // use dev middleware
  app.use(webpackDevMiddleware(webpackCompiler, {
    // defines the level of messages to log
    logLevel: 'warn',
    // public path to bind the middleware to
    publicPath: webpackConfig.output.publicPath,
  }));
  // allow using Webpack hot reloading
  app.use(webpackHotMiddleware(webpackCompiler));
};
