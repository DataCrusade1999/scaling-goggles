// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  images: {
    loader: "default",
    domains: [
      "assets-provider-for-portfolio-website.sgp1.digitaloceanspaces.com",
      "localhost",
      "datacrusade.me",
    ],
  },
}

module.exports = withBlitz(config)
