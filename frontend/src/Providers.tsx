import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { TooltipProvider } from './components/ui/Tooltip';

interface ProvidersProperties {
	children: ReactNode;
	queryClient: QueryClient;
}

function Providers({
	children,
	queryClient
}: ProvidersProperties): ReactElement {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<TooltipProvider delayDuration={300}>
					{children}
				</TooltipProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default Providers;
