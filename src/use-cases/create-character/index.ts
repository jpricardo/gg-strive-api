import MongoCharactersRepository from '../../repositories/implementations/mongo-characters-repository.js';
import CreateCharacterController from './create-character-controller.js';
import CreateCharacterUseCase from './create-character-use-case.js';

const mongoCharactersRepository = new MongoCharactersRepository();

const createCharacterUseCase = new CreateCharacterUseCase(mongoCharactersRepository);

export const createCharacterController = new CreateCharacterController(createCharacterUseCase);
