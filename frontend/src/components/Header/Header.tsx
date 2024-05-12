import { ReactElement } from 'react';
import { ToggleThemeMode } from '../ToggleThemeMode/ToggleThemeMode';

function Header(): ReactElement {
	return (
		<header className='flex h-14 w-full items-center justify-between border-b bg-background p-4'>
			<h1 className='text-lg font-semibold'>Task Calendar</h1>
			<ToggleThemeMode />
		</header>
	);
}

export default Header;
