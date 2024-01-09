import { useEffect, useState } from 'react';
import './App.css';
import { TPokemon } from './types/pokemon.type';
import { Fiche } from './components/fiche';

function App() {
	const [data, setData] = useState<TPokemon>();
	const [nomNo, setNomNo] = useState<string | number>(81);

	useEffect(() => {
		const url = 'https://tyradex.tech/api/v1/pokemon/' + nomNo;

		const options = {
			headers: {
				'User-Agent': 'RobotPokemon',
				From: 'adresse[at]domaine[dot]com',
				'Content-type': 'application/json',
			},
		};

		fetch(url, options)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			})
			.catch((error) => `${error}`);
	}, []);

	console.log(data);

	return (
		<div>
			<header></header>
			<body>{data && <Fiche data={data!}></Fiche>}</body>
		</div>
	);
}

export default App;
