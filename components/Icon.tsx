import React, { FC } from "react";
import { Platform } from "react-native";
import { IconProps } from "react-native-vector-icons/Icon";
import I from "react-native-vector-icons/Ionicons";

const Icon: FC<IconProps> = ({ name, ...props }) => (
  <I name={Platform.OS === "ios" ? `ios-${name}` : `md-${name}`} {...props} />
);
export default Icon;
