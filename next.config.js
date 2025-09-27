const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isProd ? "/Inmobiliaria" : "",
  assetPrefix: isProd ? "/Inmobiliaria/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};
