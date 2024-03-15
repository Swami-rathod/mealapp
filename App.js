import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoryScreens from './screens/CategoryScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetaiScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealItem from './components/MealItem';
import FavoriteContextProvider from './store/context/favorite-context';
import FavoriteScreen from './screens/FavoriteScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Category" component={CategoryScreens}/>
      <Drawer.Screen name="Favorites" component={FavoriteScreen}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <FavoriteContextProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='MealsCategories'  screenOptions={{
           headerStyle:{backgroundColor:"lightgreen"},
           headerTintColor:"purple",
           contentStyle:{backgroundColor:"skyblue"}
          }}>
            <Stack.Screen name='MealsCategories' component={DrawerNavigator} options={{
              // title:"All Categories" 
            }}/>
            <Stack.Screen name='MealsOverviewScreen' component={MealsOverViewScreen}/>
            <Stack.Screen name='MealsDetailsScreen' component={MealDetailScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
        </FavoriteContextProvider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:'#24180f',
  },
});
