import * as React from 'react';
import { ScrollView } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { Pokemon } from '../types';
import PokeCard from './PokeCard';
import PokeChart from './PokeChart';

interface Props {
	pokemon: Pokemon;
	visible: boolean;
	hideModal: () => void;
	width: number;
}

const PokeModal: React.FC<Props> = ({ pokemon, visible, hideModal, width }) => {
	return (
		<Portal>
			<Dialog
				visible={visible}
				onDismiss={hideModal}
				style={{ height: '80%', padding: 0, margin: 0 }}
			>
				<Dialog.ScrollArea style={{ padding: 0, margin: 0 }}>
					<ScrollView
						contentContainerStyle={{
							paddingHorizontal: 0,
							marginHorizontal: 0,
						}}
					>
						<Button icon="close-box" onPress={hideModal}>
							Close
						</Button>
						<PokeCard pokemon={pokemon} width={width} height={210} />
						<PokeChart pokemon={pokemon} />
					</ScrollView>
				</Dialog.ScrollArea>
			</Dialog>
		</Portal>
	);
};

export default React.memo(PokeModal);
