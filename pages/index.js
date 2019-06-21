import Home from './Home';
import About from './About';
import Geo from './Geo';
import Consulta from './Consulta'

import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    About: About,
    Geo: Geo,
    Consulta: Consulta
  })
);

export default Routes;