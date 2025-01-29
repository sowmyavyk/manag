import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { User, Utensils } from "lucide-react-native"
import  {ProfileScreen}  from "@/screens/ProfileScreen"
import {MessScreen} from "@/screens/MessScreen"
import type { MainTabParamList } from "./types"

const Tab = createBottomTabNavigator<MainTabParamList>()

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#16A34A", // Slightly darker green
tabBarInactiveTintColor: "#888", // Slightly lighter gray
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Mess"
        component={MessScreen}
        options={{
          tabBarIcon: ({ color }) => <Utensils size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}

