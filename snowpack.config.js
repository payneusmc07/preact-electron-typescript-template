/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: { url: "/", static: true },
		src: { url: "/dist" }
	},
	plugins: [
		"@snowpack/plugin-dotenv",
		"@snowpack/plugin-typescript",
		"@prefresh/snowpack",
		"@snowpack/plugin-sass",
		"@snowpack/plugin-postcss"
	],
	alias: {
		"ipcRenderer": "./Main.tsx",
		"@utils": "/lib/utils",
		"@helpers": "lib/helpers",
		"@ipc": "/lib/ipc",
		"@constants": "/lib/utils/constants"
	},
	routes: [
		/* Enable an SPA Fallback in development: */
		{"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	optimize: {
		/* Example: Bundle your final build: */
		"bundle": true,
	},
	packageOptions: {
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		"baseUrl": "./"
	},
}
