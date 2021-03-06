import classes from './card-list.module.css';
import { Card } from '../card/card';

export const CardList = ({ monsters }) => {
	const monsterList = monsters.map(monster => (
		<Card key={monster.id} monster={monster} />
	));

	return <div className={classes['card-list']}>{monsterList}</div>;
};
