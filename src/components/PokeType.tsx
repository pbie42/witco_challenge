import * as React from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';
import { Pokemon } from '../types';

const pokemonTypes = [
	['Normal', '#B1B186'],
	['Fire', '#F08030'],
	['Water', '#6890F0'],
	['Grass', '#78C850'],
	['Electric', '#F8D030'],
	['Ice', '#98D8D8'],
	['Fighting', '#C03028'],
	['Poison', '#A040A0'],
	['Ground', '#EDDBA8'],
	['Flying', '#A890F0'],
	['Psychic', '#F85888'],
	['Bug', '#A8B820'],
	['Rock', '#B8A038'],
	['Ghost', '#7F6AA3'],
	['Dark', '#705848'],
	['Dragon', '#7038F8'],
	['Steel', '#C2C2D7'],
	['Fairy', '#EE99AC'],
];

interface Props {
	pokemon: Pokemon;
}

const PokeType: React.FC<Props> = ({ pokemon }) => {
	const typeChips = pokemon.types.map((type, i) => {
		const foundPokemonType = pokemonTypes.find(
			(t: Array<string>) => t[0].toLowerCase() === type.name
		);
		if (!foundPokemonType) return <></>;
		let [name, color] = foundPokemonType;
		return (
			<Chip
				key={i}
				ellipsizeMode="middle"
				style={{ backgroundColor: color }}
				textStyle={{ color: 'white' }}
			>
				{name}
			</Chip>
		);
	});

	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'flex-start',
			}}
		>
			{typeChips}
		</View>
	);
};

export default React.memo(PokeType);
