import React from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem,
  Icon,
} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    <Navbar large transparent titleLarge="Chirp"></Navbar>
    <List inset>
      <ListItem title="All Chats" link="/all-chats/">
        <Icon slot="media" f7="chat_bubble_2" className="text-primary"></Icon>
      </ListItem>

      <ListItem title="Stared Chats" link="#">
        <Icon slot="media" f7="star" className="text-primary"></Icon>
      </ListItem>
      <ListItem title="Top Chats" link="#">
        <Icon slot="media" f7="chart_bar" className="text-primary"></Icon>
      </ListItem>
    </List>

    <BlockTitle medium>Others</BlockTitle>
    <List inset>
      <ListItem title="Settings" link="#">
        <Icon slot="media" f7="gear" className="text-primary"></Icon>
      </ListItem>
      <ListItem title="About" link="#">
        <Icon slot="media" f7="info_circle" className="text-primary"></Icon>
      </ListItem>
    </List>
  </Page>
);
export default HomePage;
