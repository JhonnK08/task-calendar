import { toast } from 'sonner';

interface UseToastResponse {
	onSuccessToast: (message: string) => void;
	onErrorToast: (message: string) => void;
}

export function useToast(): UseToastResponse {
	function onSuccessToast(message: string): void {
		toast.success(message);
	}

	function onErrorToast(message: string): void {
		toast.error(message);
	}

	return {
		onErrorToast,
		onSuccessToast
	};
}
