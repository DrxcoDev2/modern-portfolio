import type { NextConfig } from "next";
const withOptimizedImages = require('next-optimized-images');

const baseConfig: NextConfig = {
  reactStrictMode: true,
  optimizeImages: true,
  optimizeImagesInDev: true,
  images: {
    disableStaticImages: false,
    domains: ['https://drxcodev.render.com'], // cambia esto por tu dominio real
  },
};

export default withOptimizedImages(baseConfig);
