import React from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';

const AllChatsPage = () => {
  const allChatsBots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Page name="home">
      <Navbar
        large
        transparent
        title="All Chats"
        titleLarge="All Chats"
        backLink="Chirp"
      ></Navbar>

      <List mediaList>
        {allChatsBots.map((bot, index) => (
          <ListItem
            key={bot}
            link={`/chat/${index}/`}
            title="Lawted"
            text="a frontend developer, a creator of this app, a BUPT student"
          >
            <img
              slot="media"
              src="https://avatars.githubusercontent.com/u/56634309?v=4"
              className="rounded-full w-12"
            />
          </ListItem>
        ))}
      </List>
    </Page>
  );
};
export default AllChatsPage;
