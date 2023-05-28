const webpack = require('webpack');
const dotenv = require('dotenv');

// Load the environment variables from .env
const env = dotenv.config().parsed;

// Create a new webpack.DefinePlugin with the environment variables
const envKeys = Object.keys(env).reduce((acc, key) => {
  acc[`process.env.${key}`] = JSON.stringify(env[key]);
  return acc;
}, {});

// Add the DefinePlugin to the existing plugins array
module.exports = {
  //...
  plugins: [
    new webpack.DefinePlugin(envKeys),
    //...
  ],
  //...
};
