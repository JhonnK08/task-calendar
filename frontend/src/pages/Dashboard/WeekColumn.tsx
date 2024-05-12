import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ReactElement } from 'react';
import TaskCard from 'src/components/TaskCard/TaskCard';

interface WeekColumnProperties {
	date: Date;
}

function WeekColumn({ date }: WeekColumnProperties): ReactElement {
	return (
		<div className='relative col-span-1 flex flex-col items-center justify-start px-4'>
			<div className='sticky top-0 z-10 my-2 flex w-full items-start justify-center gap-x-1 border-b bg-background p-2'>
				<h2 className='text-center text-xl font-semibold'>
					{format(date, 'dd', { locale: ptBR })}
				</h2>
				<h3 className='text-lg font-medium'>
					{format(date, 'MMM', { locale: ptBR })}
				</h3>
			</div>
			<TaskCard />
			<TaskCard />
			<TaskCard />
			<TaskCard />
			<TaskCard />
			<TaskCard />
			<TaskCard />
			<TaskCard />
		</div>
	);
}

export default WeekColumn;
