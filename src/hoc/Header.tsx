import {h} from "preact"
import Helmet from "preact-helmet"
import React from "preact/compat"

interface IHeadProps {
	title?: string
}

const Header = (props: IHeadProps) => {
	return (
		<Helmet>
			<title>{props.title}</title>
		</Helmet>
	)
}

export default Header
