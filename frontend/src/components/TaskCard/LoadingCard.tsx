import { ReactElement } from 'react';
import { Skeleton } from '../ui/Skeleton';

function LoadingCard(): ReactElement {
	return <Skeleton className='h-[125px] rounded-xl' />;
}

export default LoadingCard;
