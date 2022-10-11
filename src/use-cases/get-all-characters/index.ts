import MariaDatabaseConnector from '../../db/maria-database-connector.js';
import MariaCharactersRepository from '../../repositories/implementations/maria-characters-repository.js';
import GetAllCharactersController from './get-all-characters-controller.js';
import GetAllCharactersUseCase from './get-all-characters-use-case.js';

const mariaDatabaseConnector = new MariaDatabaseConnector({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'JTA*4dm1n',
});

const mariaCharactersRepository = new MariaCharactersRepository(mariaDatabaseConnector);

const getAllCharactersUseCase = new GetAllCharactersUseCase(mariaCharactersRepository);

const getAllCharactersController = new GetAllCharactersController(getAllCharactersUseCase);

export { getAllCharactersController };
