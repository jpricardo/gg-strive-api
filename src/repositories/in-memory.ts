import NotImplementedError from '../errors/not-implemented-error';

export default abstract class InMemoryRepository {
	static async create(): Promise<InMemoryRepository> {
		throw new NotImplementedError();
	}
	abstract stop(options?: { doCleanup: boolean }): Promise<boolean>;
	abstract getUri(): string;
}
