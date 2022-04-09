import React, { useContext } from 'react';
import CardDataContext from '../context/CardData/CardDataContext';

const Navbar = () => {

	const contextCardData = useContext(CardDataContext);
	const { data, getData } = contextCardData;

	return (
		<>
			<nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
				<div className="container-fluid">
					<p className="navbar-brand m-0">Navbar</p>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<p className="nav-link m-0 active" aria-current="page">Home</p>
							</li>
						</ul>
					</div>
					{data.length === 0 && <button className="btn btn-outline-warning" onClick={getData}>GET</button>}
				</div>
			</nav>
			<h1 className='text-end mt-5 me-5 px-5 py-3'>Click 'GET' button on navbar to get data.</h1>
			<span className='upArrow'>&uarr;</span>
		</>
	)
}

export default Navbar