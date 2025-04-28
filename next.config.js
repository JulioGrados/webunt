// const withCSS = require('@zeit/next-css')

// module.exports = withCSS({
//   /* config options here */
//   trailingSlash: true,
//   compiler: {
//     // ssr and displayName are configured by default
//     styledComponents: true,
//   }
  
// })

const withCSS = require('@zeit/next-css')
const path = require('path')

module.exports = withCSS({
  /* config options here */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    }

    return config
  }
})
