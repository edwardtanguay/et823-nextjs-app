"use client"
import { useState } from 'react';

const NewTodoForm = () => {
	const [message, setMessage] = useState('initial value');	

	const handleChangeMessage = () => {
		setMessage('new text');
	}

	console.log(localStorage);

	return (
		<>
			<div>Message: {message}</div>
			<div><button className="btnNormal" onClick={() => handleChangeMessage()}>Change it</button></div>
		</>
	)
}

export default NewTodoForm