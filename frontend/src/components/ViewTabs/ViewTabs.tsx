import { ReactElement } from 'react';
import { ViewType } from 'src/types/dashboard';
import { cn } from 'src/utils';
import * as UITabs from '../ui/Tabs';

interface ViewTabsProperties {
	onChangeTabValue: (value: ViewType) => void;
	className?: string;
}

function ViewTabs({
	onChangeTabValue,
	className
}: ViewTabsProperties): ReactElement {
	return (
		<UITabs.Tabs
			defaultValue='daily'
			className={cn('w-52', className)}
			onValueChange={(value: string): void =>
				onChangeTabValue(value as ViewType)
			}
		>
			<UITabs.TabsList className='grid w-full grid-cols-2'>
				<UITabs.TabsTrigger value='daily'>Diária</UITabs.TabsTrigger>
				<UITabs.TabsTrigger value='weekly'>Semanal</UITabs.TabsTrigger>
			</UITabs.TabsList>
		</UITabs.Tabs>
	);
}

export default ViewTabs;
