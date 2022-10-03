import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Icon,
} from "framework7-react";

const HomePage = () => (
  <Page name="home">
    <Navbar large transparent title="叽叽喳喳"></Navbar>
    <List inset>
      <ListItem title="All Chats" link="#">
        <Icon slot="media" f7="chat_bubble_2" className="text-red-200"></Icon>
      </ListItem>

      <ListItem title="Stared Chats" link="#">
        <Icon slot="media" f7="star"></Icon>
      </ListItem>
      <ListItem title="Top Chats" link="#">
        <Icon slot="media" f7="chart_bar"></Icon>
      </ListItem>
    </List>

    <BlockTitle medium>Others</BlockTitle>
    <List inset>
      <ListItem title="Settings" link="#">
        <Icon slot="media" f7="gear"></Icon>
      </ListItem>
      <ListItem title="About" link="#">
        <Icon slot="media" f7="info_circle"></Icon>
      </ListItem>
    </List>
  </Page>
);
export default HomePage;
