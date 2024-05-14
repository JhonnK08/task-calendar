export function formatDuration(duration: number): string {
	const hours = Math.floor(duration / 3600);
	const minutes = Math.floor((duration % 3600) / 60);
	const seconds = duration % 60;

	const hoursString = hours === 0 ? '' : `${hours}h`;

	const minutesString = minutes === 0 ? '' : `${minutes}min`;

	const secondsString = seconds === 0 ? '' : `${seconds}s`;

	return `${hoursString} ${minutesString} ${secondsString}`;
}

export function formatInSeconds(duration: string): number {
	const hours = Number(duration.slice(0, 2));
	const minutes = Number(duration.slice(2, 4));
	const seconds = Number(duration.slice(4, 6));

	const totalSeconds = hours * 3600 + minutes * 60 + seconds;

	return totalSeconds;
}
