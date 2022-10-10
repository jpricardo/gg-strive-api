import DoNotInstantiateError from '../errors/do-not-instantiate-error';
import NotImplementedError from '../errors/not-implemented-error';

export default abstract class InMemoryRepository {
	static async create(): Promise<InMemoryRepository> {
		throw new NotImplementedError();
	}

	constructor() {
		if (this.constructor === InMemoryRepository) throw new DoNotInstantiateError();
	}

	abstract stop(options?: { doCleanup: boolean }): Promise<boolean>;
	abstract getUri(): string;
}
