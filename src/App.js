import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './Components/MainHeader';
import {Link} from 'react-router-dom';

function App() {
	return (
		<div>
			<MainHeader/>
			<main>
				<Route path="/welcome">
					<Welcome />
				</Route>
				<Route path="/products">
					<Products />
				</Route>
			</main>

		</div>
	);
}

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component

export default App;
