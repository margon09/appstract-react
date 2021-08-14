import React from 'react'
import classes from './Popup.module.css'

const Popup = props => {
	return (
		<div className={classes.Popup}>
			{/* <span className={classes.close} onClick={props.handleClose}>
				x
			</span> */}
			{props.content}
		</div>
	)
}

export default Popup
