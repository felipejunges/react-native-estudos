/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Routes from "./pages";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
