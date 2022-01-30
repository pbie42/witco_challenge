import * as React from 'react';
import { FlatList } from 'react-native';
import { Layout, Pokemon } from '../types';
import PokeCard from './PokeCard';

interface Props {
	pokemon: Array<Pokemon>;
	getNextPokemon: () => void;
	layout: Layout;
}

const PokeList: React.FC<Props> = ({ pokemon, getNextPokemon, layout }) => {
	return (
		<FlatList
			data={pokemon}
			keyExtractor={(item: Pokemon) => item.name}
			renderItem={({ item }: { item: Pokemon }) => (
				<PokeCard pokemon={item} width={layout.width} height={310} />
			)}
			onEndReached={getNextPokemon}
		/>
	);
};

export default PokeList;
