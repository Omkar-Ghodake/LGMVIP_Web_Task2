import React from 'react';

const CardItems = (props) => {

	const { avatar, id, fname, lname, email } = props;

	return (
		<>
			<div className="card">
				<img src={avatar} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="m-0">ID: <strong>{id}</strong></p>
					<p className="m-0">First Name: <strong>{fname}</strong></p>
					<p className="m-0">Last Name: <strong>{lname}</strong></p>
					<p className="m-0">Email ID: <strong>{email}</strong></p>
				</div>
			</div>
		</>
	)
}

export default CardItems