module.exports = {
	allowNotifications: true,
	scripts: {
		entry: 'Main.es6',
		inputPath: './src/scripts',
		outputPath: '../public/wp-content/themes/rocket-theme/js',
		outputName: 'main'
	},
	styles: {
		entry: 'main.scss',
		inputPath: './src/styles',
		outputPath: '../public/wp-content/themes/rocket-theme/css'
	},
	browserSync: {
		proxy: "rocket.js",
		open: false,
		notify: false,
		https: false,
		ui: false,
		ghostMode: false
	}
}
