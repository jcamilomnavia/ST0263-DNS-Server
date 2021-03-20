import { cleanChannelMessages, listChannel } from 'modules/channels/actions';
import { cleanQueueMessages, listQueue } from 'modules/queue/actions';
import Loadable from 'react-loadable';
import ScreenLoading from 'views/ui/screen-loading';

const Root = Loadable({
  loader: () => import('views/screens/login'),
  loading: ScreenLoading,
});

const ListRooms = Loadable({
  loader: () => import('views/screens/list-rooms'),
  loading: ScreenLoading,
});

const ListTypes = Loadable({
  loader: () => import('views/screens/select-type'),
  loading: ScreenLoading,
});

const Room = Loadable({
  loader: () => import('views/screens/room'),
  loading: ScreenLoading,
});

const routes = [
  {
    path: '/',
    component: Root,
    exact: true,
    privated: true,
    actions: [cleanChannelMessages, cleanQueueMessages],
  },
  {
    path: '/login',
    component: Root,
    exact: true,
    privated: true,
    actions: [cleanChannelMessages, cleanQueueMessages],
  },
  {
    path: '/room',
    component: ListTypes,
    exact: true,
    privated: true,
    actions: [cleanChannelMessages, cleanQueueMessages],
  },
  {
    path: '/room/:type',
    component: ListRooms,
    exact: true,
    privated: true,
    actions: [listQueue, listChannel, cleanChannelMessages, cleanQueueMessages],
  },
  {
    path: '/room/:type/:id',
    component: Room,
    privated: true,
  },
  {
    name: '404',
    path: '*',
    component: () => null,
  },
];

export default routes;
