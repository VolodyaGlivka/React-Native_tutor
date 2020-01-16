import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeContainer from './src/components/Home/HomeContainer';
import BookContainer from './src/components/Book/BookContainer';
import BookChapterContainer from './src/components/Book/BookChapter/BookChapterContainer';

const AppNavigator = createStackNavigator({
  Home: {screen: HomeContainer},
  Book: { screen: BookContainer },
  BookChapter: BookChapterContainer
});

export default createAppContainer(AppNavigator);