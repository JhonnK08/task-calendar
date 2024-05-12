import Header from './components/Header/Header';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import { TooltipProvider } from './components/ui/Tooltip';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<TooltipProvider delayDuration={300}>
				<div className='flex h-screen w-screen flex-col items-start justify-center bg-background text-foreground'>
					<Header />
					<div className='flex w-screen flex-1 flex-col items-center justify-start gap-y-4 overflow-hidden p-4'>
						<Dashboard />
					</div>
				</div>
			</TooltipProvider>
		</ThemeProvider>
	);
}

export default App;
