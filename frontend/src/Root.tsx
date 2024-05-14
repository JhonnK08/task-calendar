import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

function Root(): ReactElement {
	return (
		<div className='flex h-screen w-screen flex-col items-start justify-center bg-background text-foreground'>
			<Header />
			<div className='flex w-screen flex-1 flex-col items-center justify-start gap-y-4 overflow-hidden p-4'>
				<Outlet />
			</div>
		</div>
	);
}

export default Root;
