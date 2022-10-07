export default class AlreadyConnectedError extends Error {
	constructor() {
		super('The connector is already connected to the Database!');
	}
}
