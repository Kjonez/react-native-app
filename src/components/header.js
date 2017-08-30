import React from 'react';
import { Text, View } from 'react-native'; //View is primitve element to position/wrap/style

const Header = () => {
	const { textStyle, viewStyle } = styles;

	return (
	<View style ={viewStyle}> 
		<Text style ={textStyle}>Albums</Text>
	</View>	
	);
};

//camel case instead of dashes for object css
const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8'
	},
	textStyle: {
		fontSize: 20
	}	
};

export default Header;