import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  FooterTab,
  Footer,
  Text,
  Content,
  Badge,
  Input,
  Item,
  Form,
  Picker
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";

type AppProps = {};
type AppState = {
  isReady: boolean;
};

export default class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Title>タイトル</Title>
          </Left>
          <Body>
            <Title>タイトル</Title>
          </Body>
          <Right>
            <Title>タイトル</Title>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge>
                <Text>2</Text>
              </Badge>
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge>
                <Text>51</Text>
              </Badge>
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
