import React from 'react'
import classes from '../popup/Popup.module.css'
import Button from '../../UI/Button/Button'

const ErrorMessage = props => {
	return (
		<div
			className={classes.Popup}
			id={'message'}
			style={{
				background:
					'linear-gradient(90deg, rgb(72, 20, 72) 0%, rgb(164, 94, 164) 100%)'
			}}
		>
			<h1 style={{ color: 'white' }}>
				Your registration has failed due to some technical problem!
			</h1>
			<h1 style={{ color: 'white' }}>
				Please try again later or call customer support
			</h1>

			<Button type='btnClose' onClick={props.handleClose}>
				Back
			</Button>
		</div>
	)
}

export default ErrorMessage
