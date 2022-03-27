import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

interface IProfileImageProps {
  source: string | null;
  size?: number;
}

const ProfileImage: React.FC<IProfileImageProps> = ({ source, size }) => {
  const imageSize = size || Dimensions.get("window").width / 3;

  return (
    <View style={{ width: imageSize, height: imageSize }}>
      {source ? (
        <Image
          style={{
            width: imageSize,
            height: imageSize,
          }}
          uri={source}
          preview={require("../assets/blank-profile.png")}
        />
      ) : (
        <Image
          style={{
            width: imageSize,
            height: imageSize,
          }}
          uri={require("../assets/blank-profile.png")}
        />
      )}
    </View>
  );
};

export default ProfileImage;
