import InMemoryRepository from './in-memory';
import { MongoMemoryServer } from 'mongodb-memory-server';

export default class TestRepository extends InMemoryRepository {
	private static server = MongoMemoryServer;
	private static serverInstance: MongoMemoryServer;

	static async create() {
		TestRepository.serverInstance = await TestRepository.server.create();
		return new TestRepository();
	}

	private constructor() {
		super();
	}

	async stop(options?: { doCleanup?: boolean }) {
		return TestRepository.serverInstance.stop(options);
	}

	getUri() {
		return TestRepository.serverInstance.getUri();
	}
}
