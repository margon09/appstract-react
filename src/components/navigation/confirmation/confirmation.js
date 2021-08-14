import React from 'react'
import classes from '../popup/Popup.module.css'
import Button from '../../UI/Button/Button'

const Confirmation = props => {
	return (
		<div
			// className={(classes.Popup, 'message')}
			className={classes.Popup}
			id={'message'}
			style={{
				background: 'linear-gradient(270deg, #cef2fa 0%, #59bfef 100%)'
			}}
		>
			<h1>
				Congratulations, {props.res.name} {props.res.surname}!
			</h1>
			<h2>
				You have successfully registered with email: <em>{props.res.email}</em>
			</h2>
			{props.res.subscription ? (
				<p>
					Your subscription to offers is{' '}
					<span className={classes.active}>ACTIVE</span>
				</p>
			) : (
				<p>
					and your subscription to offers is{' '}
					<span className={classes.inactive}>INACTIVE</span>
				</p>
			)}

			<Button type='btnClose' onClick={props.handleClose}>
				CLose
			</Button>
		</div>
	)
}

export default Confirmation
