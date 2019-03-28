import { createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import MainPage from './App';
import ScreenDrawerA from './screens/ScreenDrawerA';
import ScreenDrawerB from './screens/ScreenDrawerB';
import ScreenTabA from './screens/ScreenTabA';
import ScreenTabB from './screens/ScreenTabB';
import ScreenA from './screens/ScreenA';
import ScreenC from './screens/ScreenC';
import ScreenB from './screens/ScreenB';

const stackNavigator = createStackNavigator({
    StackScreenA: ScreenA,
    StackScreenB: ScreenB,
    StackScreenC: ScreenC
});

const drawerNavigator = createDrawerNavigator({
    ScreenA: ScreenDrawerA,
    ScreenB: ScreenDrawerB,
    ScreenC: stackNavigator
});

const tabbedNavigator = createBottomTabNavigator({
    ScreenA: ScreenTabA,
    ScreenB: ScreenTabB,
    ScreenC: stackNavigator
});





const switchNavigator = createSwitchNavigator({
    Drawer: drawerNavigator,
    Tabbed: tabbedNavigator,
    Stack: stackNavigator,
    Main: MainPage
},
{
    initialRouteName: 'Main'
});




export const MainNavigation = createAppContainer(switchNavigator);