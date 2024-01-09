export function StarMaker(nb: number) {
	let stars = [];
	const fullStar = Math.floor(nb);
	const halfStar = nb - fullStar == 0.5;
	const quarterStar = nb - fullStar == 0.25;

	for (let i = 0; i < fullStar; i++) {
		stars.push(
			<span
				className='star'
				style={{
					color: '#ffc107',
				}}>
				&#128142;
			</span>
		);
	}

	if (halfStar) {
		stars.push(
			<span
				className='star'
				style={{
					color: '#ffc107',
				}}>
				&#128311;
			</span>
		);
	}

	if (quarterStar) {
		stars.push(
			<span
				className='star'
				style={{
					color: '#ffc107',
				}}>
				&#128313;
			</span>
		);
	}

	return stars;
}
