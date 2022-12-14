import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../store/auth-context';

type Props = { children: React.ReactNode };
const RequireAuth: React.FC<Props> = ({ children }) => {
	const { isLogged, isLoading } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		!isLogged && !isLoading && navigate(-1);
	}, [isLoading]);

	return <>{isLogged && <>{children}</>}</>;
};

export default RequireAuth;
