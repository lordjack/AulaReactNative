import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
} from 'native-base';

export default class PaginaDetalheCarro extends Component {
  render() {
    const { route } = this.props;
    const { nome, modelo } = route.params;

    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Seu carro é {nome} e seu modelo: {modelo}
                </Text>
                <Button
                  full
                  success
                  onPress={() => this.props.navigation.goBack()}>
                  <Text>Voltar</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
