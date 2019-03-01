import React from 'react';
import { createStackNavigator, createAppContainer, } from "react-navigation";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Import Redux
import { Provider } from 'react-redux';
import store from './app/Redux/Store';

// Import Screen Backend
import Home_screen from './app/Views/Home_screen'
import Detail_screen from './app/Views/Detail_screen'
import ItemAdd_screen from './app/Views/ItemAdd_screen'
import ItemList_screen from './app/Views/ItemList_screen'
import ItemUpdate_screen from './app/Views/ItemUpdate_screen'

// Import Screen Frontend
import Login_screen from './app/Views/Login_screen';
import Register_screen from './app/Views/Register_screen';
import Profile_screen from './app/Views/Profile_screen';

// createStackNavigator itu untuk membuat screen bisa di klik
// const AppNavigator = createStackNavigator(
//   {
//     Home: Home_screen,
//     Login: Login_screen,
//     Register: Register_screen,
//     Detail: Detail_screen,
//     Profile: Profile_screen,
//     ItemAdd: ItemAdd_screen,
//     ItemList: ItemList_screen
//   },
//   {
//     initialRouteName: "ItemList",
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#004445',
//       },
//       title: 'LOVON',
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   }
// )

const HomeStack = createStackNavigator({
  Home: Home_screen,
  Detail: Detail_screen,
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#004445',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });

const AccountStack = createStackNavigator({
  Login: Login_screen,
  Register: Register_screen,
  Profile: Profile_screen,
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#004445',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });


const ItemStack = createStackNavigator({
  ItemList: ItemList_screen,
  ItemAdd: ItemAdd_screen,
  ItemUpdate: ItemUpdate_screen,
  Detail: Detail_screen,
}, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#004445',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });

const AppContainer = createAppContainer(createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={20} color="#004445" />
        )
      }
    },
    Item: {
      screen: ItemStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list" size={20} color="#004445" />
        )
      }
    },
    Account: {
      screen: AccountStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user-circle" size={20} color="#004445" />
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#004445',
      inactiveTintColor: 'gray',
      showIcon: true,
    }
  }
));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

// export default createAppContainer(AppNavigator);
