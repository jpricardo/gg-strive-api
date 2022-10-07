export default class MissingCredentialsError extends Error {
	constructor() {
		super('Missing authentication credentials!');
	}
}
