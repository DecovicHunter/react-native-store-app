import * as React from "react";

import { tintColorLight } from "../constants/Colors";
import { Sizes } from "../constants/Styles";
import { Text } from "./theme";

const spacing = Sizes.base;
const sizes = {
  l: 1,
  m: 0.6,
  s: 0.3,
};

interface ILogoProps {
  size?: keyof typeof sizes;
}

const Logo: React.FC<ILogoProps> = ({ size = "l" }) => {
  const ratio = sizes[size];

  return (
    <>
      <Text
        style={{
          fontSize: 60 * ratio,
          fontWeight: "bold",
          textAlign: "center",
          elevation: 10,
        }}
      >
        Suri
      </Text>
      <Text
        style={{
          elevation: 10,
          color: tintColorLight,
          fontSize: 30 * ratio,
          fontFamily: "lobster",
          textAlign: "center",
        }}
      >
        Life made easier
      </Text>
    </>
  );
};
export default Logo;
