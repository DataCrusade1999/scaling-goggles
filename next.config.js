// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  images: {
    loader: "default",
    domains: ["www.w3schools.com", "localhost"],
  },
}

module.exports = withBlitz(config)
