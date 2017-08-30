//code for ios development
//Native gets ahold of the native device

import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header.js'

const App = () => (
  <Header />
);


//Rendering to native device

AppRegistry.registerComponent('albums', () => App);