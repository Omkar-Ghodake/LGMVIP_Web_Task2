import React, { useState } from 'react';
import CardDataContext from './CardDataContext';

const CardDataState = (props) => {

	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);

	const getData = async () => {
		const response = await fetch(`https://reqres.in/api/users?page=${page}`);
		const parsedData = await response.json();
		setData(parsedData.data);
	}

	const handlePreviousClick = async () => {
		setPage(page - 1);
		const response = await fetch(`https://reqres.in/api/users?page=${page - 1}`);
		const parsedData = await response.json();
		setData(parsedData.data);
	}

	const handleNextClick = async () => {
		setPage(page + 1);
		const response = await fetch(`https://reqres.in/api/users?page=${page + 1}`);
		const parsedData = await response.json();
		setData(parsedData.data);
	}

	return (
		<>
			<CardDataContext.Provider value={{ data, getData, page, handlePreviousClick, handleNextClick }}>
				{props.children}
			</CardDataContext.Provider>
		</>
	)
}

export default CardDataState