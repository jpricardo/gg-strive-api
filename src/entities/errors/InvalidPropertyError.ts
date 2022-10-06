class InvalidPropertyError extends Error {
	constructor(property: string) {
		super('Invalid property: ' + property);
	}
}

export default InvalidPropertyError;
