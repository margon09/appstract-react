import React, { Component } from 'react'
import classes from './Layout.module.css'

class Layout extends Component {
	render() {
		return (
			<div className={classes.Layout}>
				{/* content: different pages that could be used in the app */}
				<main>{this.props.children}</main>
			</div>
		)
	}
}

export default Layout
