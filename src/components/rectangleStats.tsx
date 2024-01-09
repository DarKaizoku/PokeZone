import { TStats } from '../types/stats.type';

export function RectangleStats(props: { stats: TStats }) {
	const STATS = props.stats;

	let cpt = 0;
	let lotDiv: JSX.Element[] = [];

	while (cpt < Object.keys(STATS).length) {
		const valueStat =
			Object.values(STATS)[cpt] <= 100
				? Object.values(STATS)[cpt]
				: Object.values(STATS)[cpt] - 100;

		const hundred = Object.values(STATS)[cpt] <= 100 ? false : true;

		const stat = (
			<div className='container'>
				<div>
					<h4
						className='text-center'
						style={{
							color: 'black',
						}}>
						{Object.keys(STATS)[cpt]} :{' '}
						{Object.values(STATS)[cpt]}
					</h4>
					<div
						className='text-center mb-1'
						title={valueStat.toString()}
						style={{
							width: `100%`,
							height: '50px',
							backgroundColor: hundred
								? 'rgba(0,125,125,1)'
								: 'rgba(255, 204, 0, 50%)',
							borderRadius: '10px',
						}}>
						<div
							className='text-center'
							style={{
								height: '100%',
								width:
									valueStat +
									'%',
								backgroundColor:
									hundred
										? 'rgba(125,50,50,1)'
										: 'rgba(0,125,125,1)',
								borderRadius:
									'10px',
							}}>
							<span
								className=''
								style={{
									color: 'white',
								}}>
								{/* 	{
									Object.values(
										STATS
									)[cpt]
								} */}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
		lotDiv.push(stat);
		cpt++;
	}

	console.log(lotDiv[0]);

	return (
		<div>
			<h4
				className='text-center mb-5'
				style={{
					color: 'black',
				}}>
				Statistique :
			</h4>
			{lotDiv}
		</div>
	);
}
