import React from 'react'
import './App.css'
import Layout from './hoc/Layout/Layout'
import MainPage from './containers/mainPage/MainPage'

function App() {
	return (
		<Layout>
			<MainPage />
		</Layout>
	)
}

export default App
