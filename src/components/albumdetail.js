import React from 'react';
import {Text} from 'react-native';
import Card from './card.js';
import CardSection from './cardsection.js';

const AlbumDetail = (props) => {
	return (
		<Card>
			<CardSection>
				<Text>{props.album.title}</Text>
			</CardSection>
		</Card>	
		
	)
}

export default AlbumDetail