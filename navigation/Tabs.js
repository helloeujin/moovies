import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="Movie"
    screenOptions={{
      tabBarLabelStyle: {
        // backgroundColor: 'red',
      },
      //   tabBarLabelPosition: 'beside-icon',
      //   tabBarActiveTintColor: '#6200ee',
      tabBarStyle: {
        // backgroundColor: 'yellow',
      },
    }}
  >
    <Tab.Screen
      name="Movies"
      component={Movies}
      options={{
        // headerTitleStyle: { color: 'tomato' },
        headerRight: () => (
          <View>
            <Text>Hello</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen name="Tv" component={Tv} options={{ tabBarBadge: 5 }} />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
);

export default Tabs;
