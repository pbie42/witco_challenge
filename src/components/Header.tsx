import * as React from 'react';
import { Appbar, Divider, Menu, useTheme } from 'react-native-paper';
import { Generation, Pokedex } from '../classes/Generation';

interface Props {
	getGenPokemon: (pokedex: Pokedex) => void;
}

const Header: React.FC<Props> = ({ getGenPokemon }) => {
	const [visible, setVisible] = React.useState(false);
	const [filter, setFilter] = React.useState(Generation.ALL.toString());
	const { colors } = useTheme();

	const openMenu = () => {
		setVisible(true);
	};

	const closeMenu = () => setVisible(false);

	const generations = [
		Generation.I,
		Generation.II,
		Generation.III,
		Generation.IV,
		Generation.V,
		Generation.VI,
		Generation.VII,
		Generation.VIII,
	];

	return (
		<Appbar.Header>
			<Appbar.Content title="Pokedex" subtitle={filter} />

			<Menu
				visible={visible}
				onDismiss={closeMenu}
				anchor={
					<Appbar.Action color="white" icon="filter" onPress={openMenu} />
				}
			>
				<Menu.Item
					key={Generation.ALL.toString()}
					titleStyle={{
						color:
							filter === Generation.ALL.toString()
								? colors.primary
								: colors.text,
					}}
					onPress={() => {
						closeMenu();
						setFilter(Generation.ALL.toString());
						getGenPokemon(Generation.ALL.pokedex);
					}}
					title={`All`}
				/>
				<Divider />
				{generations.map((g, i) => (
					<Menu.Item
						key={i}
						titleStyle={{
							color:
								filter === `Gen ${g.toString()}`
									? colors.primary
									: colors.text,
						}}
						onPress={() => {
							closeMenu();
							setFilter(`Gen ${g.toString()}`);
							getGenPokemon(g.pokedex);
						}}
						title={`Gen ${g}`}
					/>
				))}
			</Menu>
		</Appbar.Header>
	);
};

export default Header;
