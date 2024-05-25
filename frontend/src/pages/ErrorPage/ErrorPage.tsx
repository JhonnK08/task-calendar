import { ReactElement } from 'react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Button } from 'src/components/ui/Button';

function NotFoundErrorPage(): ReactElement {
	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center gap-y-6 bg-background text-center text-foreground'>
			<h1 className='text-9xl'>Oops!</h1>

			<h2 className='text-4xl'>Página não encontrada! 🥴</h2>
			<h3 className='text-xl'>
				Lamentamos o erro. Por favor, tente novamente.
			</h3>
			<Link to={'/'}>
				<Button variant='link'> Voltar a página inicial </Button>
			</Link>
		</div>
	);
}

function ErrorPage(): ReactElement {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		switch (error.status) {
			case 404: {
				return <NotFoundErrorPage />;
			}
			default: {
				return <div>{error.data}</div>;
			}
		}
	}

	return <div>Something went wrong.</div>;
}

export default ErrorPage;
