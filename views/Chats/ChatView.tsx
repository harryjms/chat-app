import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  PlatformColor,
} from "react-native";

import { RootStackParamList } from "../../@types/RootStackParamList";

interface IChatBubbleProps {
  direction: "incoming" | "outgoing";
  text: string;
}

const ChatBubble: FC<IChatBubbleProps> = ({ direction, text }) => {
  const bubbleWrapStyle = useMemo(() => {
    if (direction === "incoming") return { ...stylesBubble.viewBubbleWrap };
    return { ...stylesBubble.viewBubbleWrap, alignItems: "flex-end" };
  }, [direction]);

  const bubbleStyle = useMemo(() => {
    if (direction === "incoming")
      return { ...stylesBubble.viewBubble, ...stylesBubble.viewBubbleIncoming };
    return { ...stylesBubble.viewBubble, ...stylesBubble.viewBubbleOutgoing };
  }, [direction]);

  return (
    //@ts-expect-error
    <View style={bubbleWrapStyle}>
      <View style={{ flexDirection: "row" }}>
        <View style={bubbleStyle}>
          <Text selectable style={{ color: bubbleStyle.color }}>
            {text}
          </Text>
        </View>
      </View>
      <Text style={stylesBubble.textTimestamp}>Just now</Text>
    </View>
  );
};

const stylesBubble = StyleSheet.create({
  viewBubbleWrap: {
    display: "flex",
    padding: 8,
  },
  viewBubble: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 20,
    maxWidth: "80%",
  },
  viewBubbleIncoming: {
    backgroundColor: PlatformColor("systemGray5"),
    color: PlatformColor("label"),
  },
  viewBubbleOutgoing: {
    backgroundColor: PlatformColor("systemTeal"),
    color: "white",
  },
  textTimestamp: {
    fontSize: 12,
    fontStyle: "italic",
    opacity: 0.3,
  },
});

const chat: Chat = {
  id: "abs-123",
  participants: ["abs-123", "abs-456"],
  messages: [
    {
      id: "abs-456",
      type: "text",
      from: "abs-456",
      to: "abs-123",
      content: `My number is 07446952902`,
      timestamp: new Date().getTime() + 1000,
    },
    {
      id: "abs-123",
      type: "text",
      from: "abs-123",
      to: "abs-456",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci diam, vestibulum a diam vel, porttitor aliquam erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum iaculis augue, ut congue enim. Fusce fringilla ut velit nec molestie. In molestie porta sapien vitae malesuada. Fusce porttitor malesuada turpis ac facilisis. Sed euismod odio eget velit feugiat, ut aliquet mauris porttitor. Vestibulum commodo ex vel vestibulum dapibus. Nulla tempus nibh sed erat lobortis, quis porttitor diam euismod. Donec id ligula lobortis, auctor risus nec, efficitur ipsum. Curabitur eros lacus, bibendum quis velit non, iaculis hendrerit nulla. Nam nisl nisl, commodo quis mauris eu, aliquet fermentum enim. Curabitur convallis laoreet orci, ut eleifend purus lobortis vitae. Curabitur pharetra odio rhoncus lorem egestas, ac blandit eros lacinia. Nulla volutpat ut enim eu imperdiet. Suspendisse porta tempor aliquet.\n\nPhasellus eget viverra est. Fusce auctor, metus in pellentesque luctus, tortor purus feugiat magna, sit amet fringilla metus nulla quis nisl. Integer non accumsan eros, vitae sollicitudin elit. Donec et sem rutrum, imperdiet lorem sit amet, volutpat lorem. Etiam neque ante, efficitur quis viverra non, semper sed justo. Nulla a sapien ligula. Donec odio sapien, elementum eu fermentum sit amet, tincidunt sit amet ligula. Praesent tristique augue nec urna varius convallis. Morbi feugiat sem ut ultrices rutrum. Morbi sed blandit risus. Sed tristique nulla nec dolor luctus accumsan. Cras consectetur turpis ac ipsum sodales facilisis.",
      timestamp: new Date().getTime(),
    },
  ],
};

const ChatView: FC<NativeStackScreenProps<RootStackParamList, "ChatView">> = ({
  navigation,
  route,
}) => {
  const currentUser = { id: "abs-123" };
  navigation.setOptions({ title: route.params.profile.name });
  return (
    <ScrollView>
      {chat.messages.map((message) => (
        <ChatBubble
          key={message.id}
          direction={message.from === currentUser.id ? "outgoing" : "incoming"}
          text={message.content}
        />
      ))}
    </ScrollView>
  );
};

export default ChatView;
