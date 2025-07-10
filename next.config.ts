import type { NextConfig } from "next";
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: true })

const baseConfig: NextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  reactStrictMode: true,
  optimizeImages: true,
  optimizeImagesInDev: true,
  images: {
    disableStaticImages: false,
    domains: ['https://drxcodev.render.com'], // cambia esto por tu dominio real
  },
  experimental: {
    turbo: true,         // solo si estás en Next.js 13.4+
  },
  swcMinify: true,        // más rápido que Terser


});

export default withBundleAnalyzer(baseConfig);
