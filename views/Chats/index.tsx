import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatList from "./ChatList";
import ChatView from "./ChatView";

const Stack = createStackNavigator();

const Chats = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="ChatView" component={ChatView} />
    </Stack.Navigator>
  );
};

export default Chats;
