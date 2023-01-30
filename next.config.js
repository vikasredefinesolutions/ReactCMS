module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: [
      'redefinecommerce.blob.core.windows.net',
      'redefinecommerce.blob.core.windows.netstring',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'redefinecommerce.blob.core.windows.net',
        pathname: '**',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'redefinecommerce.blob.core.windows.net/netstring',
      //   pathname: '**',
      // },
    ],
  },
};
