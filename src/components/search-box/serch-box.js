import classes from './search-box.module.css';

export const SearchBox = ({ placeholder, searchMonster }) => {
	return (
		<input
			className={classes.search}
			type="search"
			placeholder={placeholder}
			onChange={searchMonster}
		/>
	);
};
