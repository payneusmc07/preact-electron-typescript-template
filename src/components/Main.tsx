import {useEffect, useState} from "preact/hooks"
/**
 * @exception
 * Importing ipcRenderer directly does not seem to work,
 * but using the syntax below does not seem to cause an issue
 * */
const { ipcRenderer }  = window.require("electron")
import React from "preact/compat"

const Main = () => {
	const sayHello = () => ipcRenderer.send("send:message", "Hello from the renderer")

	const [ value, setValue ] = useState(" ")

	ipcRenderer.on("send:message-reply", ((event, args) => {
		setValue(args)
		setTimeout(() => {setValue("")}, 2000)
	}))

	return (
		<div className="bg-indigo-50 h-screen">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center
			lg:justify-between">
				<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					<span className="block">Preact-Electron Template</span>
					<span className="block text-indigo-600">Thank You For Supporting The Project</span>
					<span className="block text-indigo-600">{value}</span>
				</h2>
				<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
					<div className="inline-flex rounded-md shadow">
						<a href="#" className="inline-flex items-center justify-center px-5 py-3 border
						border-transparent text-base font-medium rounded-md text-white bg-indigo-600
						hover:bg-indigo-700" onClick={() => sayHello()}>
							Say Hi To The Main Process
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
