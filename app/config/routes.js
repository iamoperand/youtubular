import HomeScreen from '../components/HomeScreen'
import DetailsScreen from '../components/DetailsScreen'

import { StackNavigator } from 'react-navigation';

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);