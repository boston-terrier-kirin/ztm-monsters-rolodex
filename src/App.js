import './App.css';
import { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/serch-box';

const App = () => {
	console.log('App');

	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		console.log('App.useEffect_1');

		const getMonsters = async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			const data = await response.json();
			return data;
		};

		getMonsters().then((monsters) => {
			setMonsters(monsters);
		});
	}, []);

	const searchMonsterHandler = (event) => {
		console.log('App.searchMonsterHandler');
		setSearchField(event.target.value);
		console.log('App.searchMonsterHandler', searchField, '<- old state');
	};

	console.log('App.monsters', searchField, monsters);
	const filtered = monsters.filter((monster) =>
		monster.name.toLowerCase().includes(searchField)
	);

	return (
		<div className="App">
			<h1>Monsters Rolodex</h1>
			<SearchBox
				placeholder="search monster"
				searchMonster={searchMonsterHandler}
			/>
			<CardList monsters={filtered} />
		</div>
	);
};

export default App;
