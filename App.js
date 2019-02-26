import React from 'react';
import { createStackNavigator, createAppContainer, } from "react-navigation";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

// Import Redux


// Import Screen Backend
import Home_screen from './app/Views/Home_screen'
import Detail_screen from './app/Views/Detail_screen'
import ItemAdd_screen from './app/Views/ItemAdd_screen'
import ItemList_screen from './app/Views/ItemList_screen'

// Import Screen Frontend
import Login_screen from './app/Views/Login_screen';
import Register_screen from './app/Views/Register_screen';
import Profile_screen from './app/Views/Profile_screen';

// createStackNavigator itu untuk membuat screen bisa di klik
const AppNavigator = createStackNavigator(
  {
    Home: Home_screen,
    Login: Login_screen,
    Register: Register_screen,
    Detail: Detail_screen,
    Profile: Profile_screen,
    ItemAdd: ItemAdd_screen,
    ItemList: ItemList_screen
  },
  {
    initialRouteName: "Register",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#004445',
      },
      title: 'LOVON',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)


export default createAppContainer(AppNavigator);
