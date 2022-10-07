export default class InvalidUriError extends Error {
	constructor(message?: string) {
		super('Invalid URI string' + (message ? `: ${message}` : '!'));
	}
}
