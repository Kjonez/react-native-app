//code for ios development
//Native gets ahold of the native device

import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/header.js'
import AlbumList from './src/components/albumlist.js'

const App = () => (
	<View>
		<Header headerText ={'Albums'} />
		<AlbumList />
	</View>
  
);


//Rendering to native device

AppRegistry.registerComponent('albums', () => App);