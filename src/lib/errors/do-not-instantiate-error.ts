export default class DoNotInstantiateError extends Error {
	constructor() {
		super('This class should not be instantiated!');
	}
}
