import Page1 from './Page1';
import Page2 from './Page2';
import Geo from './Geo';

import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Page1,
    About: Page2,
    Geo: Geo
  })
);

export default Routes;