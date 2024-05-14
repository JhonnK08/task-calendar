import { Color } from 'src/api/types/tag';

export function getTagColor(color: Color): string {
	switch (color) {
		case Color.RED:
			return '#8B0000';
		case Color.BLUE:
			return '#00008B';
		case Color.GREEN:
			return '#006400';
		case Color.YELLOW:
			return '#9B870C';
		case Color.ORANGE:
			return '#FF8C00';
		case Color.PURPLE:
			return '#4B0082';
		case Color.PINK:
			return '#C71585';
		case Color.BROWN:
			return '#8B4513';
		case Color.GRAY:
			return '#808080';
		case Color.BLACK:
			return '#000000';
		default:
			return '#FFFFFF';
	}
}
