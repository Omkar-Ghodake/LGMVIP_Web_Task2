import React from 'react'
import Cards from './Cards'
import Spinner from './Spinner'

const Home = () => {
	return (
		<>
			<div className="container my-3">
				<Spinner />
				<Cards />
			</div>
		</>
	)
}

export default Home