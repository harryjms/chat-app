import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { RootStackParamList } from "../../@types/RootStackParamList";
import ChatListItem from "./ChatListItem";

const chatlist = [
  {
    id: 1,
    name: "Harry",
    imageURL:
      "https://pbs.twimg.com/profile_images/1503104385336885258/GMTsWvz3_400x400.jpg",
    lastMessageText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan nulla nec odio rhoncus vestibulum.",
    lastMessageTime: "2022-03-27T15:00:00Z",
    unread: 1,
  },
  {
    id: 2,
    name: "Harry",
    imageURL: "",
    lastMessageText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan nulla nec odio rhoncus vestibulum.",
    lastMessageTime: "2022-03-27T15:00:00Z",
    unread: 1,
  },
];

const ChatList: React.FC<
  NativeStackScreenProps<RootStackParamList, "ChatList">
> = ({ navigation }) => {
  const handleTouch = (profile: { name: string }) => {
    navigation.navigate("ChatView", { profile });
  };
  return (
    <ScrollView style={styles.container}>
      {chatlist.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} onTouch={handleTouch} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ChatList;
