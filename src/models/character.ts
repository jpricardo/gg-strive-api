import { characterSchema, connector } from '../schemas/character.js';

const Character = connector.model('Character', characterSchema);

export default Character;
