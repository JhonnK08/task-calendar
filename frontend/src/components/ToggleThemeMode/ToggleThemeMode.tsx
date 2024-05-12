import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { Button } from '../ui/Button';

export function ToggleThemeMode() {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			variant='outline'
			size='icon'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? (
				<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			) : (
				<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			)}
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}
