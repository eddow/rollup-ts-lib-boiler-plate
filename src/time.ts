export function getTime() {
	const date = new Date();
	return date.toLocaleTimeString('en-US', {
		hour12: false,
		hour: '2-digit',
		minute: '2-digit',
		second: 'numeric',
	});
}