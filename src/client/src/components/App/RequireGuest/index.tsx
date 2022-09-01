import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../store/auth-context';

type Props = { children: React.ReactNode };
const RequireGuest: React.FC<Props> = ({ children }) => {
	const { isLogged, isLoading } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		isLogged && navigate(-1);
	}, [isLoading, isLogged]);

	return <>{children}</>;
};

export default RequireGuest;
