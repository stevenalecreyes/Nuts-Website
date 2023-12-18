import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../userContext';

export default function Login() {

	const { user, setUser } = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if(email !== "" && password !== "") {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password]);
	 
	return (
		<div>

		</div>
	)
}