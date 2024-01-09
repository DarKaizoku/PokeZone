import { TPokemon } from '../types/pokemon.type';
import { RectangleStats } from './rectangleStats';
import { Resistance } from './resistance';
import { TypeP } from './typeP';

export function Fiche(props: { data: TPokemon }) {
	const DATA = props.data;

	/*function image(url : string, listImage:TSprite){

        if(listImage.shiny == null && listImage.gmax == null) return url

        let result = url

        if(url == listImage.regular)
        return listImage.shiny != null ? listImage.shiny

        
    }*/

	return (
		<div>
			<div
				className='card m-5'
				style={{ width: 35 + '%' }}>
				<h4 className='card-title text-center'>
					<a>{DATA.name.fr}</a>
				</h4>
				<TypeP data={DATA.types} />
				<img
					className='card-img-top'
					src={
						DATA.sprites.regular != null
							? DATA.sprites.regular
							: 'https://media.tenor.com/FdZsnuQxyvYAAAAM/egg-face-talk.gif'
					}
					alt='Card image cap'
				/>

				<div className='card-body container'>
					{/* <h4 className='card-title'>
						<a>{DATA.name.fr}</a>
					</h4> */}
					<p className='card-text text-center'>
						Type : {DATA.category}
					</p>
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
					<a
						href='//'
						className='btn btn-primary mt-5'>
						Button
					</a>
				</div>
			</div>
		</div>
	);
}
