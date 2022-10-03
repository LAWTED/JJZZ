import React from 'react';
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
  Button
} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large transparent title='叽叽喳喳'></Navbar>
    {/* Toolbar */}
    {/* Page content */}
    <BlockTitle>Navigation</BlockTitle>
  </Page>
);
export default HomePage;