import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "dintek.ru",
      "st24.stpulscen.ru",
      "mal-meh.ru",
      "www.spetcteh.ru",
      "qsgrp.com",
    ],
  },
  sassOptions: {
    includePaths: ["./src/styles"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });
    return config;
  },
};

export default nextConfig;
