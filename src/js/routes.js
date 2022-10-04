import HomePage from '../pages/home.jsx';
import AllChatsPage from '../pages/allChats.jsx';
import NotFoundPage from '../pages/404.jsx';
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
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
