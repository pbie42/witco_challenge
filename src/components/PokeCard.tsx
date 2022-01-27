import * as React from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';

interface Props {
	name: string;
	id: number;
	width: number;
	imgUrl: string;
}

const PokeCard: React.FC<Props> = ({ name, id, width, imgUrl }) => {
	return (
		<Card
			style={{
				width: width,
			}}
		>
			<Card.Content>
				<Title>{name}</Title>
				<Paragraph>{`No: ${id}`}</Paragraph>
			</Card.Content>
			<Card.Cover source={{ uri: imgUrl }} style={{ height: 310 }} />
		</Card>
	);
};

export default React.memo(PokeCard);
