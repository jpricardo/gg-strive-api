export default class InvalidPropertyError extends Error {
	private properties: string[] = [];

	constructor(properties: string | string[]) {
		if (properties.length === 0) {
			throw new Error('Invalid argument error!');
		}
		if (typeof properties === 'string') {
			super('Invalid property: ' + properties);
			this.setProperties([properties]);
		} else {
			super('Invalid properties: ' + properties.join(', '));
			this.setProperties(properties);
		}
	}

	getProperties() {
		return this.properties;
	}

	setProperties(properties: string[]) {
		this.properties = properties;
	}
}
