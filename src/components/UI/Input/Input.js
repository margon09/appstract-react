import React from 'react'
import classes from './Input.module.css'

const Input = props => {
	const inputType = props.type || 'text'
	const cls = [classes.Input]
	const htmlFor = `${inputType}-${Math.random()}`

	return (
		<div className={classes.Form}>
			<div className={cls.join(' ')}>
				<label htmlFor={htmlFor}>{props.label}</label>
				<input
					type={inputType}
					id={htmlFor}
					value={props.value}
					onChange={props.onChange}
					required={props.required}
					pattern={props.pattern}
					name={props.name}
					title={props.title}
					placeholder={props.placeholder}
					className={props.className}
				/>
				<span>{props.errorMessage}</span>
			</div>
		</div>
	)
}

export default Input
