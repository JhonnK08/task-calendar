import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface
} from 'class-validator';
import { parseISO } from 'date-fns';

@ValidatorConstraint()
export class IsAfterNowConstraint implements ValidatorConstraintInterface {
	validate(date: string) {
		return Date.now() > parseISO(date).getTime();
	}

	defaultMessage(args: ValidationArguments) {
		return `${args.property} must not be before now.`;
	}
}
