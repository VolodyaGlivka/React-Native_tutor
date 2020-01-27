import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeContainer from './src/components/Home/HomeContainer';
import FavoriteContainer from './src/components/Home/FavoriteContainer';
import BookContainer from './src/components/Book/BookContainer';
import BookChapterContainer from './src/components/Book/BookChapter/BookChapterContainer';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeContainer },
    Book: {
      screen: BookContainer,
      // we can add navigation Option here
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#ff6f00'
        },
        headerTintColor: 'white'
      }
    },
    BookChapter: BookChapterContainer
  },
  // here we can set default navigation Option for all pages
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ff6f00'
      },
      headerTintColor: 'white'
    }
  }
);

const bottomTabNavigator = createBottomTabNavigator({
  Main: AppNavigator,
  Favorite: FavoriteContainer
});

export default createAppContainer(bottomTabNavigator);
