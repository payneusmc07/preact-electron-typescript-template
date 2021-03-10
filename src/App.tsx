import { h } from "preact"
import Header from "./hoc/Header"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

const App = () => {
	return (
		<div>
			<Header/>
			<Navbar/>
			<Main/>
		</div>
	)
}


export default App
