const preset = require("postcss-preset-env");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
	plugins: [
		preset({stage: 0}),
		purgecss({
			content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
			css: ["./**/*.scss"],
			safelist: {
				standard: ["html", "body", "svg"],
			},
			keyframes: true,
			variables: true,
		}),
		cssnano({
			preset: [
				"default",
				{
					colormin: false,
				},
			],
		}),
	],
};
