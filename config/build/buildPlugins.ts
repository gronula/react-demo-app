import path from "path";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

export const buildPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    })
  ]
}
