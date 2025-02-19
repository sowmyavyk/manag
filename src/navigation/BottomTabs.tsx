import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { User, Utensils } from "lucide-react-native"
import  {ProfileScreen}  from "@/screens/ProfileScreen"
import {MessScreen} from "@/screens/MessScreen"
import type { MainTabParamList } from "./types"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator<MainTabParamList>()

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#16A34A",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: "#fff",
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          tabBarLabel: "Profile",
        }}
      />
      <Tab.Screen
        name="Mess"
        component={MessScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Utensils size={size} color={color} />,
          tabBarLabel: "Mess",
        }}
      />
    </Tab.Navigator>
  )
}


