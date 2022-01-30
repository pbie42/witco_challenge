import * as React from 'react';
import { useTheme } from 'react-native-paper';
import {
	VictoryArea,
	VictoryChart,
	VictoryPolarAxis,
	VictoryTheme,
} from 'victory-native';
import { Pokemon } from '../types';

interface Props {
	pokemon: Pokemon;
}

const PokeChart: React.FC<Props> = ({ pokemon }) => {
	const { colors } = useTheme();

	return (
		<VictoryChart
			polar
			width={250}
			theme={VictoryTheme.material}
			style={{
				parent: {
					alignItems: 'center',
				},
			}}
		>
			<VictoryArea
				data={pokemon.stats.map((s) => {
					let name = s.name;
					if (name === 'special-attack') name = 'sp.atk';
					else if (name === 'special-defense') name = 'sp.def';
					return { x: name, y: s.stat };
				})}
				style={{
					data: {
						fill: colors.primary,
						stroke: 'black',
						strokeWidth: 2,
					},
				}}
			/>
			<VictoryPolarAxis />
		</VictoryChart>
	);
};

export default React.memo(PokeChart);
