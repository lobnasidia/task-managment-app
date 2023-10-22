import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from '../screens/Welcome'
import Task from '../screens/Task'
import Addtask from '../screens/Addtask'
import Forgotpassword from '../screens/Forgotpassword'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import Home from '../screens/Home'


const Stack = createNativeStackNavigator();
const Mystack = () => {
  return (

    <Stack.Navigator
    initialRouteName='Welcome'
  >
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerShown: false
      }}
    />

    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{
        headerShown: false
      }}
    />

    <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
            />

    <Stack.Screen
        name="Forgotpassword"
        component={Forgotpassword}
        options={{
          headerShown: false
        }}
            />
   <Stack.Screen
        name="Task"
        component={Task}
        options={{
          headerShown: false
        }}
            />
    <Stack.Screen
        name="Addtask"
        component={Addtask}
        options={{
          headerShown: false
        }}
            />

<Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false
        }}
            />

<Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
            />
   
    

  </Stack.Navigator>

  )
}

export default Mystack

