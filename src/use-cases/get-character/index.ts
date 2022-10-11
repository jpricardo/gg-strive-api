import MariaDatabaseConnector from '../../db/maria-database-connector.js';
import MariaCharactersRepository from '../../repositories/implementations/maria-characters-repository.js';
import GetCharacterController from './get-character-controller.js';
import GetCharacterUseCase from './get-character-use-case.js';

const mariaDatabaseConnector = new MariaDatabaseConnector({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'JTA*4dm1n',
});

const mariaCharactersRepository = new MariaCharactersRepository(mariaDatabaseConnector);

const getCharacterUseCase = new GetCharacterUseCase(mariaCharactersRepository);

const getCharacterController = new GetCharacterController(getCharacterUseCase);

export { getCharacterController };
