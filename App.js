import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import PaginaDetalhe from './components/PaginaDetalhe';
import PaginaDetalheCarro from './components/PaginaDetalheCarro'
import PaginaHome from './components/PaginaHome';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    const Stack = createStackNavigator();

    return (
      <Container>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Página Inicial">
            <Stack.Screen name="Página Inicial" component={PaginaHome} />
            <Stack.Screen name="Detalhe" component={PaginaDetalhe} />
            <Stack.Screen name="DetalheCarro" component={PaginaDetalheCarro} />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    );
  }
}
