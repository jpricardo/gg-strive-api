export default class AlreadyDisconnectedError extends Error {
	constructor() {
		super('The connector is not connected to the Database!');
	}
}
