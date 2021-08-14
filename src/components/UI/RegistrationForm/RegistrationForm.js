import React from 'react'
import Input from '../Input/Input'
import classes from './Form.module.css'

const RegistrationForm = props => {
	return (
		<form onSubmit={props.onSubmit} method='POST'>
			<Input
				label='* First name:'
				type='text'
				name='name'
				onChange={props.setName}
				pattern='[a-zA-ZæÆøØåÅ]+'
				required={true}
				title='Names should only contain letters. e.g. John'
				placeholder='Type your first name (required)'
                className='name'
			/>
			<Input
				label='* Last name:'
				type='text'
				name='name'
				onChange={props.setSurname}
				pattern='[a-zA-ZæÆøØåÅ]+'
				required={true}
				title='Last names should only contain letters. e.g. Brown'
				placeholder='Type your last name (required)'
                className='surname'
			/>
			<Input
				label='Phone:'
				type='text'
				name='name'
				onChange={props.setPhone}
				pattern='^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$'
				required={false}
				title='Use a valid Danish tel number e.g. (+45) 35 35 35 35 or +45 35 35 35 35 or 35 35 35 35 or 35353535'
				placeholder='Type your phone number (optional)'
                className='phone'
			/>
			<Input
				label='* Email:'
				type='email'
				name='name'
				onChange={props.setEmail}
				pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
				required={true}
				title='Use a valid email address e.g. jack22@gmail.com'
				placeholder='Type your email number (required)'
                className='email'
			/>

			<br />
			<label className={classes.labelForm}>
				Gender:
				<select onChange={props.setGender} className='gender'>
					<option selected={true} disabled>
						Choose (optional)
					</option>
					<option value={1}>♀ Female</option>
					<option value={2}>♂ Male</option>
					<option value={3}>⚥ Non-binary</option>
					<option value={4}>Prefer not to answer</option>
				</select>
			</label>

			<div className={classes.checkBoxDiv}>
				<label className={classes.labelForm}>
					Subscribe to offers:
					<input
						type='checkbox'
						id='checkbox1'
						checked={props.subscription}
						name='checkbox1'
						onChange={props.setSubscription}
					/>
				</label>

				<input className={classes.btnSubmit} type='submit' value='Submit' />
			</div>
		</form>
	)
}

export default RegistrationForm
