import React, {useContext} from 'react'
import { DataContext } from "../../../context/DataProvider";
import RegistrationForm from '../../Login/RegistrationForm';
import LoginForm from '../../Login/LoginForm';

export const RegisterPage = () => {
	const value = useContext(DataContext)

    return (
		<>
		<RegistrationForm />
		</>
    )
}
