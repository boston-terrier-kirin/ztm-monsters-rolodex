import classes from './card.module.css';

export const Card = ({ monster }) => {
	return (
		<div className={classes['card-container']}>
			<img
				alt="monster"
				src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
			/>
			<h2>{monster.name}</h2>
			<h2>{monster.email}</h2>
		</div>
	);
};
