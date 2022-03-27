import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import Grid from "./views/Grid";
import Chats from "./views/Chats/index";
import Icon from "./components/Icon";

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="PeopleView"
          component={Grid}
          options={{
            title: "People",
            tabBarIcon: ({ focused, size, color }) => (
              <Icon
                name={focused ? "grid" : "grid-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ChatView"
          component={Chats}
          options={{
            title: "Chats",
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <Icon
                name={focused ? "chatbox" : "chatbox-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileView"
          component={Grid}
          options={{
            title: "Profile",
            tabBarIcon: ({ focused, size, color }) => (
              <Icon
                name={focused ? "person-circle" : "person-circle-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
