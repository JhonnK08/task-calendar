import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface
} from 'class-validator';

@ValidatorConstraint()
export class IsAfterNowConstraint implements ValidatorConstraintInterface {
	validate(date: Date) {
		return Date.now() < date.getTime();
	}

	defaultMessage(args: ValidationArguments) {
		return `${args.property} must not be before now.`;
	}
}
