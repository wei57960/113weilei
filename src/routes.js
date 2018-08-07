import UserCenter from './container/UserCenter';
import StudentsLib from './container/StudentsLib';
import ClassDetail from './container/ClassDetail';
import AppWrapper from './container/AppWrapper';
import HomeWork from './container/HomeWork';
const routeConfig = {
  path: '/',
  component: AppWrapper,
  indexRoute: { component: HomeWork }, //StudentsLib
  childRoutes: [
    { path: 'studentsLib', component: StudentsLib },
    { path: 'userCenter/:mid', component: UserCenter },
    { path: 'classDetail/:classId', component: ClassDetail },
    { path: 'homeWork', component: HomeWork }
  ]
}

// /studentsLib

export default routeConfig
