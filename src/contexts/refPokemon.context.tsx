import React, { useState } from 'react';

interface RefPokemonContextProps {
	children: React.ReactElement;
}

export interface RefPokemonContextInterface {
	refPokemon: string | number;

	setRefPokemon: (value: string | number) => void;
}

export const RefPokemonContext =
	React.createContext<RefPokemonContextInterface>({
		refPokemon: 1,
		setRefPokemon: (value: string | number) => {},
	});

export const RefPokemonProvider = ({ children }: RefPokemonContextProps) => {
	const [data, setData] = useState<string | number>(6);

	const modifRef = (refPokemon: string | number) => {
		setData(refPokemon);
	};

	const contextValue = {
		refPokemon: data,

		setRefPokemon: modifRef,
	};

	return (
		<RefPokemonContext.Provider value={contextValue}>
			{children}
		</RefPokemonContext.Provider>
	);
};
