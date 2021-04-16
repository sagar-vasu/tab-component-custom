import React from 'react';

import Ionicons from 'react-native-vector-icons/FontAwesome';

import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from './Views/Home';
import Vendors from './Views/Vendors';
import Blog from './Views/Blog';
import Messenger from './Views/Messenger';
import Favorites from './Views/Favorites';

import TabBar from './components/tabBar';
import {View, StyleSheet, Text} from 'react-native';

/* declaration of stacks */
const BlogStack = createStackNavigator({
  blog: {
    screen: Blog,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const VendorsStack = createStackNavigator({
  vendor: {
    screen: Vendors,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const HomeStack = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const MessengerStack = createStackNavigator({
  messenger: {
    screen: Messenger,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const FavoritesStack = createStackNavigator({
  favorite: {
    screen: Favorites,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const Tabs = createBottomTabNavigator(
  {
    Blog: BlogStack,
    Vendor: VendorsStack,
    Home: HomeStack,
    Messenger: MessengerStack,
    Favorite: FavoritesStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Blog') {
          iconName = `home`;
        } else if (routeName === 'Vendor') {
          iconName = `star`;
        } else if (routeName === 'Home') {
          iconName = `rocket`;
        } else if (routeName === 'Messenger') {
          iconName = `wechat`;
        } else if (routeName === 'Favorite') {
          iconName = `heart`;
        }

        return (
          <View>
            <Ionicons
              name={iconName}
              size={horizontal ? 20 : 25}
              color={tintColor}
            />
            {focused ? (
              <Text
                style={{
                  borderBottomColor: '#FF5F5F',
                  width: '100%',
                  borderBottomWidth: 3,
                  marginTop: -10,
                }}></Text>
            ) : (
              <Text
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  borderBottomColor: 'transparent',
                  marginTop: -10,
                }}></Text>
            )}
          </View>
        );
      },
    }),
    tabBarComponent: props => <TabBar {...props} />,
    tabBarOptions: {
      tabFeatured: 'Home',
      backgroundFeaturedIcon: '#FE677C',
      activeFeaturedTintColor: 'white',
      inactiveFeatureTintColor: 'white',
      showLabel: true,
      activeTintColor: '#FF5F5F',
      inactiveTintColor: '#8890A6',
      style: {
        height: 80,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        bottom: 0,
        borderTopColor: '#F2F3EF',
      },
    },
  },
);

export default createAppContainer(Tabs);
