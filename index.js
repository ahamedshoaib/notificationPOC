import { AppRegistry } from 'react-native';
import bg from './bg'; // <-- Import the file you created in (2)
import App from './App';
AppRegistry.registerComponent('notification', () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bg);