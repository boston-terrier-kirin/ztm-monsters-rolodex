import classes from './search-box.module.css';

export const SearchBox = (props) => {
	const {placeholder, searchMonster} = props;
	return (
		<input
			className={classes.search}
			type="search"
			placeholder={placeholder}
			onChange={searchMonster}
		/>
	);
};
