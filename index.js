/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import DefaultSignin from './src/screens/Auth/DefaultSignin'

AppRegistry.registerComponent(appName, () => DefaultSignin);
