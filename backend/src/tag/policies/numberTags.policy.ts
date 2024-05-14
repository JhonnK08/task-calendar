import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class NumberMaxTagsPolicy {
	private readonly maxTags = 5;

	checkMaxTagsLimit(tagsLength: number): void {
		if (tagsLength === this.maxTags) {
			throw new BadRequestException(
				`Limit of tags reached. (${this.maxTags})`
			);
		}
	}
}
