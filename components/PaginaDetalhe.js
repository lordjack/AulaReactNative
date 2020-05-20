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
  Form,
  Item,
  Input,
  Label,
  ListItem,
  Radio,
  Right,
  Left,
} from 'native-base';

export default class PaginaDetalhe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: null,
      num2: null,
      total: null,
      operacao: 'itemSoma',
    };
  }

  calcular = () => {
    let calc = 0;

    console.log(this.state.operacao);

    if (this.state.operacao == 'itemSoma') {
      calc = parseInt(this.state.num1) + parseInt(this.state.num2);

    } else if (this.state.operacao == 'itemSub') {
      calc = parseInt(this.state.num1) - parseInt(this.state.num2);

    } else if (this.state.operacao == 'itemMult') {
      calc = parseInt(this.state.num1) * parseInt(this.state.num2);

    } else if (this.state.operacao == 'itemDiv') {
      calc = parseInt(this.state.num1) / parseInt(this.state.num2);
    }

    this.setState({
      total: calc,
    });
    console.log(this.state.num1);
  };

  render() {
    const { route } = this.props;
    const { nome, telefone } = route.params;

    return (
      <Container>
        <Content scrollEnabled={true}>
          <Form>
            <Item floatingLabel>
              <Label>Número 01</Label>
              <Input
                name="num1"
                onChangeText={(texto) => this.setState({ num1: texto })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Número 02</Label>
              <Input
                name="num2"
                onChangeText={(texto) => this.setState({ num2: texto })}
              />
            </Item>
            <ListItem>
              <Left>
                <Text>Soma</Text>
              </Left>
              <Right>
                <Radio
                  onPress={() => this.setState({ operacao: 'itemSoma' })}
                  selected={this.state.operacao == 'itemSoma'}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Subtração</Text>
              </Left>
              <Right>
                <Radio
                  onPress={() => this.setState({ operacao: 'itemSub' })}
                  selected={this.state.operacao == 'itemSub'}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Multiplicação</Text>
              </Left>
              <Right>
                <Radio
                  onPress={() => this.setState({ operacao: 'itemMult' })}
                  selected={this.state.operacao == 'itemMult'}
                />
              </Right>
            </ListItem>
                  <ListItem>
              <Left>
                <Text>Divisão</Text>
              </Left>
              <Right>
                <Radio
                  onPress={() => this.setState({ operacao: 'itemDiv' })}
                  selected={this.state.operacao == 'itemDiv'}
                />
              </Right>
            </ListItem>
            <Text>{this.state.total}</Text>
            <Button full onPress={() => this.calcular()}>
              <Text>Calcular</Text>
            </Button>
          </Form>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Bem vindo {nome}, seu telefone é: {telefone}
                </Text>
                <Button
                  full
                  onPress={() =>
                    this.props.navigation.navigate('DetalheCarro', {
                      nome: 'Gol',
                      modelo: 'VW',
                    })
                  }>
                  <Text>Página Carro</Text>
                </Button>
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
