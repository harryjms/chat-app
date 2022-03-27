import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  PlatformColor,
  TouchableHighlight,
} from "react-native";
import ProfileImage from "../../components/ProfileImage";

/**
 * {
    name: "Harry",
    imageURL: "",
    lastMessageText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan nulla nec odio rhoncus vestibulum.",
    lastMessageTime: "2022-03-27T15:00:00Z",
    unread: 8,
  },
 */

interface ChatListItemProps {
  onTouch: (profile: { name: string }) => void;
  chat: {
    id: number;
    name: string;
    imageURL: string | null;
    lastMessageText: string;
    lastMessageTime: string;
    unread: number;
  };
}
const ChatListItem: FC<ChatListItemProps> = ({ onTouch, chat }) => {
  const handleTouch = () => {
    onTouch({ name: "Harry" });
  };

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={handleTouch}
    >
      <View style={styles.chat}>
        <View style={{ marginRight: 4 }}>
          <ProfileImage source={chat.imageURL} size={60} />
        </View>
        <View style={styles.viewText}>
          <View style={styles.viewUsernameTime}>
            <Text style={styles.txtUsername}>{chat.name}</Text>
            <Text style={styles.textTimestamp}>{chat.lastMessageTime}</Text>
          </View>

          <View style={styles.viewMessage}>
            <Text style={styles.txtMessagePreview}>{chat.lastMessageText}</Text>
            <View style={styles.viewUnreadMarker}>
              <Text style={styles.textUnread}>{chat.unread}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  chat: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 8,
    paddingRight: 8,
    paddingLeft: 8,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 8,
    marginBottom: 8,
  },

  viewText: {
    display: "flex",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: PlatformColor("systemGray5"),
    paddingBottom: 8,
  },
  viewUsernameTime: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    flex: 1,
  },
  viewMessage: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },

  txtUsername: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  txtMessagePreview: {
    flexWrap: "wrap",
    flex: 1,
  },
  textTimestamp: {
    fontSize: 12,
  },
  viewUnreadMarker: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    backgroundColor: PlatformColor("systemBlue"),
    borderWidth: 1,
    borderColor: "transparent",
    overflow: "hidden",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  textUnread: {
    fontSize: 12,
    color: "white",
  },
});

export default ChatListItem;
