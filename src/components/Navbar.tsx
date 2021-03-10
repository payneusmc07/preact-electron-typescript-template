import React from "preact/compat"
import Link from "preact-router"

const Navbar = () => {

	return (
		<div className="bg-gray-700 p-5 w-screen-100" style={{"-webkit-app-region": "drag"}}>
			<nav className="flex justify-between">
				<div>
					<a href="#"></a>
				</div>
				<ul className="flex flex-row">
					{/* Please make sure to add your router links here
						as the current links are for display purposes only
						*/}
					<li className="pr-5 text-white"><a>Page 1</a></li>
					<li className="pr-5 text-white"><a>Page 2</a></li>
					<li className="pr-5 text-white"><a>Page 3</a></li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
