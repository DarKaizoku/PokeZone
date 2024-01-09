import { useContext, useState } from 'react';
import { TPokemon } from '../types/pokemon.type';
import { RectangleStats } from './rectangleStats';
import { Resistance } from './resistance';
import { TypeP } from './typeP';
import { RefPokemonContext } from '../contexts/refPokemon.context';

export function Fiche(props: { DATA: TPokemon }) {
	const { DATA } = props;
	const { setRefPokemon } = useContext(RefPokemonContext);

	const [clickOne, setClickOne] = useState<boolean>(false);
	const [shiny, setShiny] = useState<boolean>(
		DATA.sprites.shiny ? true : false
	);
	const [showShiny, setShowShiny] = useState<boolean>(false);

	const gmax: boolean = DATA.sprites.gmax?.regular ? true : false;

	const [showGmax, setShowGmax] = useState<boolean>(false);

	/*function image(url : string, listImage:TSprite){

        if(listImage.shiny == null && listImage.gmax == null) return url

        let result = url

        if(url == listImage.regular)
        return listImage.shiny != null ? listImage.shiny

        
    }*/

	return (
		<div
			className='col-4 card m-5'
			style={{ width: 42 + '%' }}>
			<div className='row justify-content-around'>
				<button
					className='col-4 btn btn-primary m-2'
					onClick={() => {
						setRefPokemon(--DATA.pokedexId);
					}}>
					Précédent
				</button>
				<button
					className='col-4 btn btn-primary m-2'
					onClick={() => {
						setRefPokemon(++DATA.pokedexId);
					}}>
					Suivant
				</button>
			</div>
			<h4 className='card-title text-center'>
				<a href='//'>{DATA.name.fr}</a>
			</h4>
			{shiny && (
				<button
					className='btn btn-warning'
					onClick={() =>
						setShowShiny(!showShiny)
					}>
					{!showShiny
						? 'Afficher ' +
						  DATA.name.fr +
						  ' Shiny'
						: 'Ne plus afficher ' +
						  DATA.name.fr +
						  ' Shiny'}
				</button>
			)}
			{gmax && (
				<button
					className='btn btn-success'
					onClick={() => setShowGmax(!showGmax)}>
					{!showGmax
						? 'Afficher ' +
						  DATA.name.fr +
						  ' Gmax'
						: 'Ne plus afficher ' +
						  DATA.name.fr +
						  ' Gmax'}
				</button>
			)}
			<TypeP data={DATA.types} />
			<img
				className='card-img-top'
				src={
					DATA.sprites.regular != null
						? DATA.sprites.regular
						: 'https://media.tenor.com/FdZsnuQxyvYAAAAM/egg-face-talk.gif'
				}
				onClick={() => setClickOne(!clickOne)}
				alt={DATA.name.fr ? DATA.name.fr : 'unkown'}
			/>
			{showShiny && (
				<img
					className='card-img-top'
					src={DATA.sprites.shiny!!}
					onClick={() => setClickOne(!clickOne)}
					alt={
						DATA.name.fr
							? DATA.name.fr + 'shiny'
							: 'unkown'
					}
				/>
			)}
			{showGmax && (
				<img
					className='card-img-top'
					src={
						DATA.sprites.gmax
							? DATA.sprites.gmax
									.regular!!
							: "'https://media.tenor.com/FdZsnuQxyvYAAAAM/egg-face-talk.gif'"
					}
					onClick={() => setClickOne(!clickOne)}
					alt={
						DATA.name.fr
							? DATA.name.fr + 'gmax'
							: 'unkown'
					}
				/>
			)}

			<div className='card-body container'>
				{/* <h4 className='card-title'>
						<a>{DATA.name.fr}</a>
					</h4> */}
				<p className='card-text text-center'>
					Type : {DATA.category} <br />
					Poids : {DATA.weight} <br />
					Taille : {DATA.height}
				</p>
				{clickOne && (
					<div className='row justify-content-around'>
						<div
							className='col-6 border border-black'
							style={{
								borderRadius:
									'10px',
							}}>
							<RectangleStats
								stats={
									DATA.stats
								}
							/>
						</div>

						<div
							className='col-6 border border-black'
							style={{
								borderRadius:
									'10px',
							}}>
							<Resistance
								data={
									DATA.resistances
								}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
