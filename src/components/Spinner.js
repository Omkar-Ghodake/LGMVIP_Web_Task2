import React, { useContext } from 'react';
import SpinnerGif from './spinner.gif';
import CardDataContext from '../context/CardData/CardDataContext';

const Spinner = () => {

	const contextCardData = useContext(CardDataContext);
	const { loading } = contextCardData;

	return (
		<>
			{loading && <div className="container d-flex justify-content-center align-items-center">
				<img src={SpinnerGif} alt="Loading..." />
			</div>}
		</>
	)
}

export default Spinner