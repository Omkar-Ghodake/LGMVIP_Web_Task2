import React, { useContext } from 'react';
import CardDataContext from '../context/CardData/CardDataContext';

const Navbar = () => {

	const contextCardData = useContext(CardDataContext);
	const { getData } = contextCardData;

	return (
		<>
			<nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
				<div className="container-fluid">
					<p className="navbar-brand m-0" href="#">Navbar</p>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
						</ul>
					</div>
					<button className="btn btn-outline-warning" onClick={getData}>GET</button>
				</div>
			</nav>
		</>
	)
}

export default Navbar