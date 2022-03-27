import React, { useState } from "react";
import { Dimensions, Image, View } from "react-native";

interface IProfileImageProps {
  source: string | null;
  size?: number;
}

const ProfileImage: React.FC<IProfileImageProps> = ({ source, size }) => {
  const [loaded, setLoaded] = useState(false);
  const imageSize = size || Dimensions.get("window").width / 3;

  return (
    <View style={{ width: imageSize, height: imageSize }}>
      {source ? (
        <Image
          style={{
            width: imageSize,
            height: imageSize,
            opacity: loaded ? 1 : 0,
            position: "absolute",
          }}
          source={{
            uri: source,
          }}
          onLoad={() => {
            console.log("loaded");
            setLoaded(true);
          }}
        />
      ) : null}
      <Image
        style={{
          width: imageSize,
          height: imageSize,
          opacity: loaded ? 0 : 1,
          position: "absolute",
        }}
        source={require("../assets/blank-profile.png")}
      />
    </View>
  );
};

export default ProfileImage;
