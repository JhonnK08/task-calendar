import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { TooltipProvider } from './components/ui/Tooltip';

function Providers({ children }: { children: ReactNode }): ReactElement {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<TooltipProvider delayDuration={300}>{children}</TooltipProvider>
		</ThemeProvider>
	);
}

export default Providers;
