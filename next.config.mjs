// import NextBundleAnalyzer from '@next/bundle-analyzer'
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en/dashboards/crm',
        permanent: true,
        locale: false
      },
      {
        source: '/:lang(en|fr|ar|bn)',
        destination: '/:lang/dashboards/crm',
        permanent: true,
        locale: false
      },
      {
        source: '/((?!(?:en|fr|ar|bn|front-pages|favicon.ico)\\b)):path',
        destination: '/en/:path',
        permanent: true,
        locale: false
      }
    ]
  }
}

export default nextConfig

// // akash
// import withBundleAnalyzer from '@next/bundle-analyzer';

// /** @type {import('next').NextConfig} */
// const baseConfig = {
//   basePath: process.env.BASEPATH,
//   redirects: async () => {
//     return [
//       {
//         source: '/',
//         destination: '/en/dashboards/crm',
//         permanent: true,
//         locale: false
//       },
//       {
//         source: '/:lang(en|fr|ar)',
//         destination: '/:lang/dashboards/crm',
//         permanent: true,
//         locale: false
//       },
//       {
//         source: '/((?!(?:en|fr|ar|front-pages|favicon.ico)\\b)):path',
//         destination: '/en/:path',
//         permanent: true,
//         locale: false
//       }
//     ];
//   }
// };

// export default withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// })(baseConfig);
