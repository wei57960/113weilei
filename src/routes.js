import AppWrapper from './container/AppWrapper';
import MyMusic from './container/MyMusic';
import MusicSearched from './container/MusicSearched';
import MusicUploaded from './container/MusicUploaded';

const routeConfig = {
  path: '/',
  component: AppWrapper,
  indexRoute: { component: MyMusic },
  childRoutes: [
    { path: 'MusicSearched', component: MusicSearched },
    { path: 'MusicUploaded', component: MusicUploaded }
  ]
};


export default routeConfig;
