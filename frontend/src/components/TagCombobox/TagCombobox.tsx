import { Square, SquareCheck, Tags } from 'lucide-react';
import { ReactElement, ReactNode, useState } from 'react';
import { cn } from 'src/utils';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
	Command,
	CommandEmpty,
	CommandInput,
	CommandItem,
	CommandList
} from '../ui/Command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover';

const MAX_TAGS_SHOW = 2;

const tags = [
	{
		value: 'tag1',
		label: 'tag1'
	},
	{
		value: 'tag2',
		label: 'tag2'
	},
	{
		value: 'tag3',
		label: 'tag3'
	},
	{
		value: 'tag4',
		label: 'tag4'
	},
	{
		value: 'tag5',
		label: 'tag5'
	}
];

export interface TagComboboxProperties {
	className?: string;
	values: string[];
	onChangeValues: (newValues: string[]) => void;
}

export default function TagCombobox({
	className,
	onChangeValues,
	values
}: TagComboboxProperties): ReactElement {
	const [open, setOpen] = useState(false);

	function renderSelectedTags(): ReactNode {
		const selectedTags = tags.filter(tag => values.includes(tag.value));
		console.log('selectedTags', selectedTags);

		return (
			<div className='flex gap-x-[0.125rem]'>
				{selectedTags.slice(0, MAX_TAGS_SHOW).map(tag => (
					<Badge
						variant='secondary'
						key={tag.value}
						className='rounded-sm'
					>
						{tag.label}
					</Badge>
				))}
				{selectedTags.length > MAX_TAGS_SHOW && (
					<Badge variant='secondary' className='rounded-sm'>
						+{selectedTags.length - MAX_TAGS_SHOW}
					</Badge>
				)}
			</div>
		);
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className={cn(
						'flex w-auto min-w-[80px] items-center justify-center gap-x-2 px-2',
						className
					)}
				>
					<Tags className='h-4 w-4 shrink-0 opacity-50' />
					<span>Tags</span>
					{values.length > 0 && (
						<>
							{`|`} {renderSelectedTags()}
						</>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className='w-[200px] p-0'
				side='bottom'
				align='start'
			>
				<Command>
					<CommandInput placeholder='Search tags...' />
					<CommandEmpty>No tags found.</CommandEmpty>
					<CommandList>
						{tags.map(tag => (
							<CommandItem
								key={tag.value}
								value={tag.value}
								onSelect={currentValue => {
									const found = values.find(
										item => item === currentValue
									);
									if (found) {
										onChangeValues(
											values.filter(
												item => item !== currentValue
											)
										);
									}
									onChangeValues([...values, currentValue]);
								}}
							>
								<Square
									className={cn('relative mr-2 h-4 w-4')}
									{...(values.includes(tag.value) && {
										fill: 'white'
									})}
								/>
								{values.includes(tag.value) && (
									<SquareCheck
										className={cn('absolute h-4 w-4')}
										stroke='black'
									/>
								)}
								{tag.label}
							</CommandItem>
						))}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
