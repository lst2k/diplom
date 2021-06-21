const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

// module.exports = withImages({
//   fileExtensions: ["jpg", "jpeg", "png", "gif"],
//   webpack(config, options) {
//     return config
//   }
// })

module.exports = withPlugins(
  [withImages], {
    images: {
      disableStaticImages: true
    },
    trailingSlash: true,
  }
)
