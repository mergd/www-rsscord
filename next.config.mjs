import nextMDX from "@next/mdx";
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  transpilePackages:
    process.env.NODE_ENV !== "production" ? ["next-mdx-remote"] : undefined,
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

export default withMDX(withPlaiceholder(nextConfig));
