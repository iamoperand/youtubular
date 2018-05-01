import React from 'react';
import { View, Text } from 'react-native';


import RootStack from './app/config/routes'

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}