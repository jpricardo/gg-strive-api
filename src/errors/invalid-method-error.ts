export default class InvalidMethodError extends Error {
	constructor(method?: string) {
		method ? super('Invalid HTTP Method: ${method}') : super('Invalid HTTP Method!');
	}
}
