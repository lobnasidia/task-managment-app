import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import Task from './Task'
import Addtask from './Addtask'
import plus from '../assets/plus.png'
import Settings from './Settings'


const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator>
    <Tab.Screen 
          name="HOME" 
          component={Task} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} />
              
            </View>
              )
            }
          }}
          />
    <Tab.Screen name="ADD"  component={Addtask} options={{
          tabBarIcon: ({ focused }) => (

            <TouchableOpacity onPress={() => navigation.navigate("Addtask")}>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: 'green',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30
              }}>
                <Image source={plus} style={{
                  width: 22,
                  height: 22,
                  tintColor: 'white',
                }}></Image>
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>


    <Tab.Screen 
    name="Settings" 
    component={Settings} 
     options={{
        tabBarIcon: ({focused})=>{
          return (
            <View style={{alignItems: "center", justifyContent: "center"}}> 
            <Ionicons name="settings" size={24}  color={focused ? "#16247d": "#111"} />
          
        </View>
          )
        }
      }}/>
  </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})