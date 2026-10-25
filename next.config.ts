import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // ページ遷移のアニメーション（React の <ViewTransition>）を有効にする。app/template.tsx で使用
    viewTransition: true,
  },
};

export default nextConfig;
