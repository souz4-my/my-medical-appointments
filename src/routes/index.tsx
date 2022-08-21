import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { LandingPage } from 'pages/landing'
import { HomePage } from 'pages/home'

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
			 	<Route path="/" element={<LandingPage />} />
			 	<Route path="/home" element={<HomePage />} />
			</Switch>
		</BrowserRouter>
	)
}