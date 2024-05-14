export function formatDuration(duration: number): string {
	const hours = Math.floor(duration / 3600);
	const minutes = Math.floor((duration % 3600) / 60);
	const seconds = duration % 60;

	const hoursString = hours === 0 ? '' : `${hours}h`;

	const minutesString = minutes === 0 ? '' : `${minutes}min`;

	const secondsString = seconds === 0 ? '' : `${seconds}s`;

	return `${hoursString} ${minutesString} ${secondsString}`;
}
