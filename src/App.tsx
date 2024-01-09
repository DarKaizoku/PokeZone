import { useContext, useEffect, useState } from 'react';
import './App.css';
import { TPokemon } from './types/pokemon.type';
import { Fiche } from './components/fiche';
import { RefPokemonContext } from './contexts/refPokemon.context';

function App() {
	const [data, setData] = useState<TPokemon>();
	const { refPokemon } = useContext(RefPokemonContext);
	//const [nomNo, setNomNo] = useState<string | number>(81);
	//const [refPok, setRefPok] = useState<number>(0);

	useEffect(() => {
		const url = 'https://tyradex.tech/api/v1/pokemon/' + refPokemon;

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
				//setRefPok(data.pokedexId);
			})
			.catch((error) => `${error}`);
	}, [refPokemon]);

	return (
		<div className='container '>
			<header></header>
			<body className='row justify-content-around'>
				{data && <Fiche DATA={data!}></Fiche>}
			</body>
		</div>
	);
}

export default App;
