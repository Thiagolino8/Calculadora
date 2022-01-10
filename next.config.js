/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true,
  experimental: {
    // Enables the styled-components SWC transform
    esmExternals: true,
    concurrentFeature: true,
    ServerComponents: true,
    styledComponents: true
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        module: false,
        fs: false,
        path: false
      }
    }

    return config
  }
}
