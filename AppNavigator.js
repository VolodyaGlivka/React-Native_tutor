import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeContainer from './src/components/Home/HomeContainer';
import FavoriteContainer from './src/components/Home/FavoriteContainer';
import BookContainer from './src/components/Book/BookContainer';
import BookChapterContainer from './src/components/Book/BookChapter/BookChapterContainer';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import colors from './src/const/colors';

/**
 * In each screen we can pass not only single container but also other navigators
 */
const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeContainer },
    Book: {
      screen: BookContainer
    },
    BookChapter: BookChapterContainer
  },
  // here we can set default navigation Option for all pages
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        marginLeft: -25
      },
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: 'white'
    }
  }
);

const FavoriveNavigator = createStackNavigator(
  {
    Favorite: { screen: FavoriteContainer }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        marginLeft: -25
      },
      headerTintColor: 'white'
    }
  }
);

const tabs = {
  Main: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: data => <Ionicons name='ios-home' size={25} color='white' />
    }
  },
  Favorite: {
    screen: FavoriveNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: data => <Ionicons name='ios-star' size={25} color='white' />
    }
  }
};

const bottomTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabs, {
      inactiveColorDark: 'red',
      initialRouteName : 'Main',
        barStyle: {
          backgroundColor: colors.primary
        }
    })
    : createBottomTabNavigator(tabs, {
        tabBarOptions: {
          activeBackgroundColor: 'red'
        }
      });

const drawerNavigator = createDrawerNavigator(
  {
    HomeDrawer: {
      screen: bottomTabNavigator,
      navigationOptions: () => {
        return {
          drawerLabel: 'Home'
        };
      }
    }
  },
  {
    drawerBackgroundColor: colors.secondary,
    contentOptions: {
      activeBackgroundColor: colors.third,
      activeTintColor: 'white'
    }
  }
);

export default createAppContainer(drawerNavigator);
