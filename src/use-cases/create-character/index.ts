import MariaDatabaseConnector from '../../db/implementations/maria-database-connector.js';
import MariaCharactersRepository from '../../repositories/implementations/maria-characters-repository.js';
import CreateCharacterController from './create-character-controller.js';
import CreateCharacterUseCase from './create-character-use-case.js';

const mariaDatabaseConnector = new MariaDatabaseConnector({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'JTA*4dm1n',
});

const mariaCharactersRepository = new MariaCharactersRepository(mariaDatabaseConnector);

const createCharacterUseCase = new CreateCharacterUseCase(mariaCharactersRepository);

const createCharacterController = new CreateCharacterController(createCharacterUseCase);

export { createCharacterController };
