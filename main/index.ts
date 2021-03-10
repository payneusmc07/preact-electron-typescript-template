/**
 * @summary
 * This template combines some of the newest technologies with the goal of making Electron apps even better, and
 * is meant to be more or less a "blank slate" to get you started developing Electrons apps with
 * Preact, Typescript, and Electron.
 *
 * @exception
 * I am not sure if I missed a configuration somewhere, but we cannot use the ES6 import syntax in the main process.
 * So we need to fall back to the node "require" syntax
 *
 * @exception
 * Most templates follow the Mac OS convention of leaving an application open in memory until it is explicitly killed
 * by the user. As a Mac user, this drives me insane, so I omitted it from the template.
 * For those who wish to respect the convention, just uncomment the code section

 		app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit() })

 * If you chose to go that route, please make sure to comment out "app.on("window-all-closed", () => app.quit())"
 *
 * @exception
 * In Electron V12, contextIsolation is enabled by default, however it seems to cause issues when used with React.
 * So to prevent any issues, it is disabled. Please see the Electron docs for more on contextIsolation.
 * */

const { app, BrowserWindow, clipboard, Menu, ipcMain } = require("electron")

const createWindow = async() => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		opacity: 90,
		titleBarStyle: process.platform === "darwin" ? "hiddenInset" : "default",
		webPreferences: {
			nodeIntegration: true,
			allowRunningInsecureContent: false,
			worldSafeExecuteJavaScript: true,
			contextIsolation: false,
		},
	})

	process.env.NODE_ENV === "production"
		? await win.loadFile("./build/index.html").catch(reason => console.log(reason))
		: await win.loadURL("http://localhost:8080").catch(reason => console.log(reason))

	const contextMenu = Menu.buildFromTemplate([
		{
			label: "Clear Clipboard",
			click: () => clipboard.clear("clipboard")
		},
		{role: "copy"},
		{role: "paste"},
		{role: "delete"},
		{type: "separator"},
		{role: "reload"},
		{role: "toggleDevTools"},
		{type: "separator"},
		{role: "quit"},
	])
	win.webContents.on("context-menu", () => contextMenu.popup())
}

app.whenReady().then(createWindow).catch(reason => console.log(reason))

/**
 * Quit when all windows are closed, except on macOS. There, it's common
 * for applications and their menu bar to stay active until the user quits
 * explicitly with Cmd + Q.
 */
/*
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit()
})
*/

app.on("window-all-closed", () => app.quit())

ipcMain.on("send:message", (event, args) => {
	console.log(args)
	event.sender.send("send:message-reply", "Hi from the main process")
})
