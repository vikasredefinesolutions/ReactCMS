module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: [
      'https://www.corporategear.com/',
      'redefinecommerce.blob.core.windows.net',
      'https://redefinecommerce.blob.core.windows.netstring',
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
