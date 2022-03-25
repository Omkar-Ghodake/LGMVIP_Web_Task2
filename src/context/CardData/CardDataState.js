import React, { useState } from 'react';
import CardDataContext from './CardDataContext';

const CardDataState = (props) => {

	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const getData = async () => {
		setLoading(true);
		const response = await fetch(`https://reqres.in/api/users?page=${page}`);
		const parsedData = await response.json();
		setData(parsedData.data);
		setLoading(false);
	}

	const handlePreviousClick = async () => {
		setLoading(true);
		setPage(page - 1);
		const response = await fetch(`https://reqres.in/api/users?page=${page - 1}`);
		const parsedData = await response.json();
		setData(parsedData.data);
		setLoading(false);
	}

	const handleNextClick = async () => {
		setLoading(true);
		setPage(page + 1);
		const response = await fetch(`https://reqres.in/api/users?page=${page + 1}`);
		const parsedData = await response.json();
		setData(parsedData.data);
		setLoading(false);
	}

	return (
		<>
			<CardDataContext.Provider value={{ data, getData, page, handlePreviousClick, handleNextClick, loading }}>
				{props.children}
			</CardDataContext.Provider>
		</>
	)
}

export default CardDataState