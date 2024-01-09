import { TPokemon } from '../types/pokemon.type';
import { TSprite } from '../types/sprites.type';

export function ShowPicture(props: {
	mode: string;
	DATA: TPokemon;
	clickOne: boolean;
	setClickOne: (value: boolean) => void;
}) {
	const { mode, DATA, clickOne, setClickOne } = props;

	let affichage = [];

	switch (mode) {
		case 'shiny':
			affichage = [
				<img
					className='card-img-top'
					src={DATA.sprites.shiny!!}
					onClick={() => setClickOne(!clickOne)}
					alt={
						DATA.name.fr
							? DATA.name.fr + 'shiny'
							: 'unkown'
					}
				/>,
			];
			break;
		case 'gmax':
			affichage = [
				<img
					className='col-6'
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
				/>,
				<img
					className='col-6'
					src={
						DATA.sprites.gmax
							? DATA.sprites.gmax
									.shiny!!
							: "'https://media.tenor.com/FdZsnuQxyvYAAAAM/egg-face-talk.gif'"
					}
					onClick={() => setClickOne(!clickOne)}
					alt={
						DATA.name.fr
							? DATA.name.fr + 'gmax'
							: 'unkown'
					}
				/>,
			];
			break;

		default:
			affichage = [
				<img
					className='card-img-top'
					src={
						DATA.sprites.regular != null
							? DATA.sprites.regular
							: 'https://media.tenor.com/FdZsnuQxyvYAAAAM/egg-face-talk.gif'
					}
					onClick={() => setClickOne(!clickOne)}
					alt={
						DATA.name.fr
							? DATA.name.fr
							: 'unkown'
					}
				/>,
			];
			break;
	}

	affichage = affichage.map((data) => data);

	return <div className='row'>{affichage}</div>;
}
