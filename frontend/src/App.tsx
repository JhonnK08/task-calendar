import { QueryClient } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import Providers from './Providers';
import Root from './Root';
import Dashboard from './pages/Dashboard/Dashboard';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/task-calendar/',
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

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			retry: 0
		},
		mutations: {
			retry: 0
		}
	}
});

function App() {
	return (
		<Providers queryClient={queryClient}>
			<Toaster position='bottom-left' expand={true} />
			<RouterProvider router={router} />
		</Providers>
	);
}

export default App;
