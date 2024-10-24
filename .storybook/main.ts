module.exports = {
    stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(js|jsx|ts|tsx)"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-webpack5-compiler-babel",
        "@chromatic-com/storybook"
    ],

    framework: {
		name: "@storybook/react-webpack5",
		options: {}
	},

    docs: {},

    typescript: {
        reactDocgen: "react-docgen-typescript"
    },

	babel: async (options) => ({
		...options,
		presets: [
			[
				'@babel/preset-react', {
					runtime: 'automatic',
				},
				'preset-react-jsx-transform'
			]
		],
	}),
};
