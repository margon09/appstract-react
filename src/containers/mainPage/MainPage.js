import React, { Component } from 'react'
import classes from './MainPage.module.css'
import Popup from '../../components/navigation/popup/Popup'
import Confirmation from '../../components/navigation/confirmation/confirmation'
import ErrorMessage from '../../components/navigation/error/error'
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import Button from '../../components/UI/Button/Button'
import RegistrationForm from '../../components/UI/RegistrationForm/RegistrationForm'
import axios from 'axios'

class MainPage extends Component {
	state = {
		menu: false,
		name: null,
		surname: null,
		phone: null,
		gender: null,
		email: null,
		subscription: false,
		response: null
	}

	togglePopup = () => this.setState({ menu: !this.state.menu })
	menuCloseHandler = () => this.setState({ menu: false })
	closeMessage = () => this.setState({ response: null })
	setName = e => this.setState({ name: e.target.value })
	setSurname = e => this.setState({ surname: e.target.value })
	setPhone = e => this.setState({ phone: e.target.value })
	setGender = e => this.setState({ gender: e.target.value })
	setEmail = e => this.setState({ email: e.target.value })
	setSubscription = e =>
		this.setState({ subscription: !this.state.subscription })

	onSubmit = e => {
		e.preventDefault()
		const data = {
			name: this.state.name,
			surname: this.state.surname,
			phone: this.state.phone,
			gender: this.state.gender,
			email: this.state.email,
			subscription: this.state.subscription
		}

		axios
			.post(`https://reqres.in/api/users`, data, {
				'Content-type': 'application/json'
			})
			.then(resp => this.setState({ response: resp }))
			.catch(error => console.log(error))
			.finally(() => this.togglePopup())
	}

	render() {
		const response = this.state.response
		return (
			<div className={classes.MainPage}>
				{this.state.menu && (
					<React.Fragment>
						<Popup
							content={
								<>
									<RegistrationForm
										onSubmit={this.onSubmit}
										setName={this.setName}
										setSurname={this.setSurname}
										setPhone={this.setPhone}
										setGender={this.setGender}
										setEmail={this.setEmail}
										setSubscription={this.setSubscription}
										subscription={this.state.subscription}
									/>

									<Button onClick={this.menuCloseHandler} type='btnBack'>
										Back
									</Button>
								</>
							}
							handleClose={this.togglePopup}
						/>

						<Backdrop onClick={this.menuCloseHandler} />
					</React.Fragment>
				)}
				{response !== null && response.status === 201 && (
					<Confirmation res={response.data} handleClose={this.closeMessage} />
				)}
				{response !== null && response.status !== 201 && (
					<ErrorMessage handleClose={this.closeMessage} />
				)}

				<div className={classes.signUpBoxes}>
					<h1>Welcome to the discount offer finder app</h1>
					<div className={classes.boxes}>
						<div className={classes.leftBox}>
							<h2>Sign up for the newsletter service</h2>
							<p>Everyday source of special offers</p>
							<Button type='btnMain' onClick={this.togglePopup}>
								Sign up
							</Button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default MainPage
