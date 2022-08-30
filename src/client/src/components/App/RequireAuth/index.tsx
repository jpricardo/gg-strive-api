import React, { useContext } from 'react';
import { AuthContext } from '../../../store/auth-context';

type Props = { children: React.ReactNode };
const RequireAuth: React.FC<Props> = ({ children }) => {
	const { isLogged } = useContext(AuthContext);

	return <>{isLogged && <>{children}</>}</>;
};

export default RequireAuth;
