import classes from './search-box.module.css';

export const SearchBox = (props) => {
	return (
		<input
			className={classes.search}
			type="search"
			placeholder={props.placeholder}
			onChange={props.searchMonster}
		/>
	);
};
