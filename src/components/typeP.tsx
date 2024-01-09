import { TType } from '../types/Ttype.type';

export function TypeP(props: { data: TType[] }) {
	const { data } = props;

	const affichage = data.map((typePokemon) => (
		<img
			src={typePokemon.image!!}
			title={typePokemon.name!!}
			height='25px'
		/>
	));

	return <div className='col text-center me-1'>{affichage}</div>;
}
