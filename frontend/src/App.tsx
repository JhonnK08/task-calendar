import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Providers from './Providers';
import Root from './Root';
import Dashboard from './pages/Dashboard/Dashboard';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '',
				element: <Dashboard />
			}
		]
	}
]);

function App() {
	return (
		<Providers>
			<RouterProvider router={router} />
		</Providers>
	);
}

export default App;
