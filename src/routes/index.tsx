import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { LandingPage } from 'pages/landing'

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
			 	<Route path="/" element={<LandingPage />} />
			</Switch>
		</BrowserRouter>
	)
}