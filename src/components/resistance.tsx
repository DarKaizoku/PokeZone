import { StarMaker } from '../functions/starMaker';
import { TResistance } from '../types/resistance.type';

export function Resistance(props: { data: TResistance[] }) {
	const RES = props.data;

	const affichage = RES.map((data, i) => (
		<div className='mb-2'>
			{data.name} : {StarMaker(data.multiplier)}
		</div>
	));
	return (
		<div>
			<h4
				className='text-center mb-3'
				style={{
					color: 'black',
				}}>
				Résistance :<br />
			</h4>
			<p className=' text-center mb-3'>
				&#128142; : 1x,&#128311; : 0.5x,&#128313; :
				0.25x
			</p>
			{affichage}
		</div>
	);
}
