import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
	ActivityIndicator,
	DefaultTheme,
	Provider as PaperProvider,
} from 'react-native-paper';
import { Pokedex } from './src/classes/Generation';
import Header from './src/components/Header';
import PokeList from './src/components/PokeList';
import { Pokemon, PokeRes, StatRes, TypeRes } from './src/types';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#DC0A2D',
	},
};

const App = () => {
	const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon');
	const [pokemon, setPokemon] = useState<Array<Pokemon>>([]);
	const [loading, setLoading] = useState(false);

	const [layout, setLayout] = useState({
		width: 0,
		height: 0,
	});

	const handlePokemonBatch = async (
		results: Array<PokeRes>
	): Promise<Array<Pokemon>> => {
		const pokeBatch: Array<Pokemon> = [];
		for (let x = 0; x < results.length; x++) {
			const element = results[x];
			const response = await axios.get(element.url);
			const pokeData = response.data;
			const newPokemon: Pokemon = {
				...element,
				imgUrl: pokeData.sprites.front_default,
				id: pokeData.id,
				types: pokeData.types.map((t: TypeRes) => ({
					slot: t.slot,
					name: t.type.name,
				})),
				stats: pokeData.stats.map((s: StatRes) => ({
					stat: s.base_stat,
					name: s.stat.name,
				})),
			};
			pokeBatch.push(newPokemon);
		}
		return pokeBatch;
	};

	const getPokemon = async (url: string) => {
		if (loading) return;
		setLoading(true);
		let allRes = await axios.get(url);
		setNext(allRes.data.next);
		const pokeBatch = await handlePokemonBatch(allRes.data.results);
		setPokemon((prev) => [...new Set([...prev, ...pokeBatch])]);
		setLoading(false);
	};

	const getGenPokemon = async (pokedex: Pokedex) => {
		if (loading) return;
		setPokemon([]);
		setLoading(true);
		let allRes = await axios.get(
			`https://pokeapi.co/api/v2/pokemon?offset=${pokedex.start}&limit=20`
		);
		setNext(allRes.data.next);
		const pokeBatch = await handlePokemonBatch(allRes.data.results);
		setPokemon(pokeBatch);
		setLoading(false);
	};

	useEffect(() => {
		if (pokemon.length === 0) getPokemon(next);
		return () => {};
	}, []);

	const getNextPokemon = async () => {
		getPokemon(next);
	};

	return (
		<PaperProvider theme={theme}>
			<Header getGenPokemon={getGenPokemon} />
			<View
				style={styles.container}
				onLayout={(event) => setLayout(event.nativeEvent.layout)}
			>
				{loading && pokemon.length === 0 ? (
					<ActivityIndicator animating={true} />
				) : (
					<>
						<PokeList
							pokemon={pokemon}
							getNextPokemon={getNextPokemon}
							layout={layout}
						/>
						{loading && pokemon.length > 0 ? (
							<ActivityIndicator animating={true} />
						) : (
							<></>
						)}
					</>
				)}

				<View style={styles.bottom} />
			</View>
		</PaperProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: '18%',
	},
	bottom: {
		height: '13%',
		backgroundColor: theme.colors.primary,
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
	},
});

export default App;
