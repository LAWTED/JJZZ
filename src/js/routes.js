import HomePage from '../pages/home.tsx';
import AllChatsPage from '../pages/allChats.tsx';
import NotFoundPage from '../pages/404.tsx';
import ChatPage from '../pages/chat.tsx';
var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/all-chats',
    component: AllChatsPage,
  },
  {
    path: '/chat/',
    component: ChatPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
