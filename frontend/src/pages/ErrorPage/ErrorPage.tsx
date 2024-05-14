import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'src/components/ui/Button';

function ErrorPage(): ReactElement {
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

export default ErrorPage;
