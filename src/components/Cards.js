import React, { useContext } from 'react';
import CardItems from './CardItems';
import CardDataContext from '../context/CardData/CardDataContext';

const Cards = () => {

	const contextCardData = useContext(CardDataContext);
	const { data, page, handlePreviousClick, handleNextClick } = contextCardData;

	return (
		<>
			<div className="row g-3">
				{
					data && data.map((element) => {
						return <div key={element.id} className="col-lg-4 col-md-6 col-sm-12">
							<CardItems
								avatar={element.avatar}
								id={element.id}
								fname={element.first_name}
								lname={element.last_name}
								email={element.email}
							/>
						</div>
					})
				}
			</div>
			{console.log(page)}
			{
				!(data.length === 0) && <div className="d-flex justify-content-between my-5">
					<button className="btn btn-outline-primary" disabled={page < 2} onClick={handlePreviousClick}>Previous</button>
					<button className="btn btn-outline-primary" disabled={page > 1} onClick={handleNextClick}>Next</button>
				</div>
			}
		</>
	)
}

export default Cards