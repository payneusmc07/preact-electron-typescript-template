import { h, render } from "preact"
import App from "./App"
import "tailwindcss/dist/tailwind.css"

render(<App />, document.getElementById("root"))


// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
//@ts-ignore
if (import.meta.hot) {
	//@ts-ignore
  import.meta.hot.accept()
}
