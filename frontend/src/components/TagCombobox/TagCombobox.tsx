import { Square, SquareCheck, Tags } from 'lucide-react';
import { ReactElement, ReactNode, useState } from 'react';
import { useFetchTags } from 'src/hooks/useFetchTags';
import { cn } from 'src/utils';
import { getTagColor } from 'src/utils/tagColor';
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
	const { isLoading, isFetching, error, data: tags } = useFetchTags();
	const [open, setOpen] = useState(false);

	function renderSelectedTags(): ReactNode {
		const selectedTags = tags?.filter(tag => values.includes(tag.id)) ?? [];
		console.log('selectedTags', selectedTags);

		return (
			<div className='flex gap-x-[0.125rem]'>
				{selectedTags.slice(0, MAX_TAGS_SHOW).map(tag => (
					<Badge
						variant='secondary'
						key={tag.id}
						className={`rounded-sm opacity-60`}
						style={{
							backgroundColor: getTagColor(tag.color)
						}}
					>
						{tag.name}
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
					disabled={isLoading || isFetching || !!error || !tags}
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
						{tags?.map(tag => (
							<CommandItem
								key={tag.id}
								value={tag.id}
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
									{...(values.includes(tag.id) && {
										fill: 'white'
									})}
								/>
								{values.includes(tag.id) && (
									<SquareCheck
										className={cn('absolute h-4 w-4')}
										stroke='black'
									/>
								)}
								{tag.name}
							</CommandItem>
						))}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
