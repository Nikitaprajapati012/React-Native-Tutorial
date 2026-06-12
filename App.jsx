/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import './global.css';
import SplashScreen from 'react-native-splash-screen';
// import { Button, StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack/';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {createMaterialTopTabNavigator, createMeterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native/';
import {View} from 'react-native';
import React, {useEffect} from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import AsyncStorageExample from 'src/components/AsyncStorageExample';
// import ImageComponentExample from 'src/components/ImageComponentExample';
// import Parent from 'src/components/Parent';
// import CounterRedux from 'src/components/CounterRedux';
// import {Provider} from 'react-redux'
// import { store } from 'src/redux/store/Store';
// import One from 'src/components/One';
// import MyLogin from 'src/components/MyLogin';
// import AnimatedCardFlip from 'src/components/AnimatedCardFlip';
// import Login from 'src/navigation-screens/Login';
import UserFirebaseCRUD from 'src/components/UserFirebaseCRUD';
import LoginFirebase from 'src/components/LoginFirebase';
import Register from 'src/components/Register';
import ForgotPassword from 'src/components/ForgotPassword';
// import About from 'src/navigation-screens/About';
// import { View } from 'react-native'
// import Home from 'src/navigation-screens/Home';
// import MyHeader from 'src/navigation-screens/MyHeader';
// import Example from 'src/navigation-screens/Example';
// import { createDrawerNavigator } from '@react-navigation/drawer/';
// import Search from 'src/components/Search'
// import PlatformExample from 'src/components/PlatformExample'
// import GET_API_LIST from 'src/components/GET_API_LIST'
// import DELETE_API from 'src/components/DELETE_API'
// import PATCH_API from 'src/components/PATCH_API'
// import GET_API from 'src/components/GET_API'
// import POST_API from 'src/components/POST_API'
// import PUT_API from 'src/components/PUT_API'
// import AlertExample from 'src/components/AlertExample'
// import ModalBox from 'src/components/ModalDialogBox'
// import UseRefHook from 'src/components/UseRefHook'
// import StatusBarExample from 'src/components/StatusBarExample'
// import PressableComponent from 'src/components/PressableComponent'
// import Loader from 'src/components/Loader'
// import StyleWithButton from 'src/components/StyleWithButton'
// import HideShowToggle from 'src/components/HideShowToggle'
// import ClassComponents from 'src/components/ClassComponent'
// import Grid from 'src/components/Grid'
// import UseEffectHook from 'src/components/UseEffectHook'
// import UseEffectHookUnmounting from 'src/components/UseEffectHookUnmounting'
// import UseEffectUpdatingPhase from 'src/components/UseEffectUpdatingPhase'
// import ContactList from 'src/screens/contact/ContactListScreen'
// import FlatListScreen from 'src/components/FlatListScreen'
// import SectionListScreen from 'src/components/SectionListScreen'
// import First from './src/components/First'
// import JSX from './src/components/JSX'
// import Onpress from './src/components/OnPress'
// import UseStateHook from './src/components/UseStateHook'
// import Props from './src/components/Props'
// import InputTextComponent from './src/components/InputTextComponent'
// import Styling from './src/components/Styling'
// import LoginForm from 'src/components/LoginForm'

//Components and API...
// const App = () => {
//   return (
//     // <View style={{flex:1}}>
//     //   {/* <Text style={{fontSize:20}}>Nikita Prajapati</Text>
//     //   <Text style={{fontSize:20}}>Nikita Prajapati - React Native Mobile Developer</Text>
//     //   <Button title='Press Here'/>
//     //   <First/>
//     //   <First/> */}
//     //   {/* <JSX/> */}
//     //   {/* <Onpress/> */}
//     //   {/* <UseStateHook/> */}
//     //   {/* <Props/> */}
//     //   {/* <InputTextComponent/> */}
//     //   {/* <Styling/> */}
//     //   {/* <FlatListScreen/> */}
//     //   {/* <SectionListScreen/> */}
//     //   {/* <LoginForm/> */}
//     //   {/* <ContactList/> */}
//     //   {/* <Grid/> */}
//     //   {/* <ClassComponents/> */}
//     //   {/* <UseEffectHook/> */}
//     //   {/* <UseEffectUpdatingPhase/> */}
//     //   {/* <UseEffectHookUnmounting/> */}
//     //   {/* <HideShowToggle/> */}
//     //   {/* <StyleWithButton/> */}
//     //   {/* <Loader/> */}
//     //   {/* <PressableComponent/> */}
//     //   {/* <StatusBarExample/> */}
//     //   {/* <UseRefHook/> */}
//     //   {/* <ModalBox/> */}
//     //   {/* <AlertExample/> */}
//     //   {/* <GET_API/> */}
//     //   {/* <POST_API/> */}
//     //   {/* <PUT_API/> */}
//     //   {/* <PATCH_API/> */}
//     //   {/* <DELETE_API/> */}
//     //   {/* <GET_API_LIST/> */}
//     //   {/* <PlatformExample/> */}
//     //   {/* <Search/> */}
//     // </View>
//     //Navigation start here....
//     //1. Stack Navigation...
// //     <NavigationContainer >
// //     <Stack.Navigator screenOptions={{
// //       headerStyle:styles.header,
// //       headerTitleStyle:styles.headerTitle,
// //       headerTintColor:'white',
// //       contentStyle:styles.screen
// //     }}>
// //  <Stack.Screen name='MyHeader' component={MyHeader}
// //       options={{
// //         title:'',
// //         // headerTitle:() => <Button title='One'color='red' />,
// //         // headerRight:() => <Button title='Two'color='red' />,
// //         // headerTitle:headerTitle,
// //         // headerRight:headerRight,
// // headerTitle:MyExample,}}   />
// //     <Stack.Screen name='Login' component={Login}
// // //     options={
// // //       {
// // //         title:'My Login Form',
// // //         headerTintColor:'red',
// // //         headerStyle:{
// // // backgroundColor:'blue',
// // //         },
// // //         headerTitleStyle:{
// // // fontSize:30,
// // // fontWeight:'bold',
// // // color:'white',
// // //       }
// // //     }
// //     />
// //       <Stack.Screen name='Home' component={Home} options={{headerShown : false}}/>
// //       <Stack.Screen name='About' component={About}/>
// //     </Stack.Navigator>
// //     </NavigationContainer>
//   //2. Drawer Navigation...
// // {/* <NavigationContainer >
// // <Drawer.Navigator
// // screenOptions={{
// //   drawerStyle:{
// //     backgroundColor:'#e6e6e6',
// //     width:240,
// //   },
// //   drawerLabelStyle:{
// //     fontSize:18,
// //     color:'#333',
// //   headerStyle:{
// // backgroundColor:'#6200EE'
// //   headerTintColor:'white',
// //   headerTitleAlign:'center',
// // }}>
// // <Drawer.Screen name="Home" component={HomeScreen}/>
// // <Drawer.Screen name="Profile" component={ProfileScreen}/>
// // <Drawer.Screen name="Settings" component={SettingScreen}/>
// // </Drawer.Navigator>
// // </NavigationContainer>  */}
// //3. Bottom tab navigation start here...
// <NavigationContainer>
// <Tab.Navigator
// screenOptions={({route}) => (
//   {
//     tabBarIcon: ({focused,color,size}) => getTabBarIcon(route.name,focused,color,size),
//     tabBarActiveTintColor:'blue',
//     tabBarInactiveTintColor:'gray',
//     tabBarStyle:{
//       paddingBottom:5,
//       height:60,
//     }
//   }
// )}
// >
//       <Tab.Screen name="Home" component={HomeScreen}/>
//       <Tab.Screen name="Profile" component={ProfileScreen}/>
//       <Tab.Screen name="Settings" component={SettingScreen}/>
//     </Tab.Navigator>
// </NavigationContainer>
//   )
// }
//Navigation start here....
//1. Stack Navigation...
// const Stack = createNativeStackNavigator();
// const headerTitle = () => <Button title='One' color='red' onPress={sayHello}/>
// const headerRight = () => <Button title='Two' color='green' onPress={sayHello}/>
// const sayHello = () => {
//   Alert.alert('Hello user')
// const MyExample = () => <Example/>
//2. Drawer Navigation...
// const Drawer = createDrawerNavigator()
// const HomeScreen = ({navigation}) => (
//   <View style={styles.screenContainer}>
//     <Text style={styles.headerTitle}>Home Screen</Text>
//     <Button title='Open Drawer' onPress={()=> navigation.openDrawer()}/>
//   </View> )
// const ProfileScreen = ({navigation}) => (
//     <Text style={styles.headerTitle}>Profile Screen</Text>
//   </View>
// const SettingScreen = ({navigation}) => (
//     <Text style={styles.headerTitle}>Settings Screen</Text>
// )
//3. BottomTab Navigation...
// const Tab = createBottomTabNavigator();
// const HomeScreen = () => (
//   <View style={styles.container}>
//     <Text style={styles.text}>Home Screen</Text>
// const ProfileScreen = () => (
//     <Text style={styles.text}>Profile Screen</Text>
// const SettingScreen = () => (
//     <Text style={styles.text}>Setting Screen</Text>
// const getTabBarIcon = (routeName,focused,color,size) => {
// let iconName;
// if (routeName === 'Home') {
//   iconName = focused ? 'home' : 'home-outline';
// else
//    if (routeName === 'Profile') {
//   iconName = focused ? 'person' : 'person-outline';
//    if (routeName === 'Settings') {
//   iconName = focused ? 'settings' : 'settings-outline';
// return <Icon name={iconName} size={size} color={color}/>
// 4.Top Tap navigation here...
// const TopTab = createMaterialTopTabNavigator();
// const ChatScreen = () => (
//   <View style={styles.topTapContainer}>
//     <Text style={styles.topTapText}>Chat Screen</Text>
// );
// const StatusScreen = () => (
//     <Text style={styles.topTapText}>Status Screen</Text>
// const CallScreen = () => (
//     <Text style={styles.topTapText}>Calls Screen</Text>
// // 4.Top Tap navigation ...
//   return(
//     <NavigationContainer>
//       <TopTab.Navigator
//        screenOptions={
//         {
//           tabBarActiveTintColor:'blue',
//           tabBarInactiveTintColor:'gray',
//           tabBarStyle:{
//             backgroundColor:'white'
//           },
//           tabBarIndicatorContainerStyle:{
//             backgroundColor:'blue',
//             height:3,
//           tabBarLabelStyle:{
//             fontSize:16,
//           }
//         }
//        }>
//         <TopTab.Screen name="Chats" component={ChatScreen}/>
//         <TopTab.Screen name="Status" component={StatusScreen}/>
//         <TopTab.Screen name="Calls" component={CallScreen}/>
//       </TopTab.Navigator>
//     </NavigationContainer>
const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    // Initialization code here
    SplashScreen.hide(); // Hide the splash screen after initialization
  }, []);

  return (
    // {/* <AsyncStorageExample/> */}
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginFirebase}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserFirebaseCRUD"
          component={UserFirebaseCRUD}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>

    //     {/* <View style={{flex: 1}}>
    //       {/* <ImageComponentExample/> */}
    //       {/* <Parent/> */}
    //       {/* <Provider store={store} >
    // <CounterRedux/>
    // </Provider> */}
    //       {/* <One/> */}
    //       {/* <MyLogin/> */}
    //       {/* <AnimatedCardFlip/> */}
    //       {/* <UserFirebaseCRUD /> */}
    //     </View> */}
  );
};
export default App;
/* const styles = StyleSheet.create({
  //Stack Navigation...
  header: {backgroundColor: '#6200ee'},
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  screen: {
    backgroundColor: 'lightgreen',
  //Side Drawer navigation...
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  title: {
    fontSize: 22,
    marginBottom: 20,
  //Bottom tab navigation...
  container: {
    backgroundColor: '#f8f9fa',
  text: {
    color: '#343a40',
  //Top Tap navigation...
  topTapContainer: {
    backgroundColor: '#f0f2f5',
  topTapText: {
    fontSize: 18,
}); */
