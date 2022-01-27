import * as React from 'react';
import { FlatList } from 'react-native';
import { Layout, Pokemon } from '../../App';
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
				<PokeCard
					name={item.name}
					id={item.id}
					imgUrl={item.imgUrl}
					width={layout.width}
				/>
			)}
			onEndReached={getNextPokemon}
		/>
	);
};

export default PokeList;
