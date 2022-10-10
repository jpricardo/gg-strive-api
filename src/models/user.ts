import { userSchema, connector } from '../schemas/user.js';

const User = connector.model('User', userSchema);

export default User;
