import * as React from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';
import { Pokemon } from '../types';
import PokeModal from './PokeModal';
import PokeType from './PokeType';

interface Props {
	pokemon: Pokemon;
	width: number;
	height: number;
}

const PokeCard: React.FC<Props> = ({ pokemon, width, height }) => {
	const [visible, setVisible] = React.useState(false);
	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);
	return (
		<>
			<Card
				style={{
					width: width,
				}}
				onPress={() => {
					showModal();
				}}
			>
				<Card.Content>
					<Title>{pokemon.name}</Title>
					<Paragraph>{`No: ${pokemon.id}`}</Paragraph>
					<PokeType pokemon={pokemon} />
				</Card.Content>
				<Card.Cover source={{ uri: pokemon.imgUrl }} style={{ height }} />
			</Card>
			<PokeModal
				pokemon={pokemon}
				visible={visible}
				hideModal={hideModal}
				width={width * 0.75}
			/>
		</>
	);
};

export default React.memo(PokeCard);
