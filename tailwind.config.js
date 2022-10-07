// tailwind.config.js
module.exports = {
  content: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "7xl": "5rem",
      "list-heading": "36px",
      "blog-title": "50px",
      "blog-list-title": "30px",
    },
    container: {
      center: true,
    },
    extend: {
      width: {
        607: "607px",
        650: "650px",
        660: "660px",
        670: "670px",
      },
    },
  },
  plugins: [],
}
