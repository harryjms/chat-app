import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import ProfileImage from "../components/ProfileImage";

const Grid = () => {
  return (
    <View style={[styles.container]}>
      <ProfileImage source="https://pbs.twimg.com/profile_images/1503104385336885258/GMTsWvz3_400x400.jpg" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  profileImage: {
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").width / 4,
  },
});

export default Grid;
