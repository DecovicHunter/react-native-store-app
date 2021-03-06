import * as React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";

import Avatar from "../../components/Avatar";
import { Card, View } from "../../components/theme";
import useThemeColor from "../../hooks/useThemeColor";
import { Sizes } from "../../constants/Styles";
import { Product } from "../../types/Product";
import ListFlat from "../../components/list/ListFlat";
import { useProductContext } from "../../context/ProductContext";
import Button from "../../components/button/Button";
import { Body2, H3 } from "../../components/typography";

const padding = Sizes.base;

interface FollowedStoresProps {}

const FollowedStores = ({}: FollowedStoresProps) => {
  const { products } = useProductContext();
  const color = useThemeColor({}, "text");

  const StorePost = ({ item, index }: { item: Product; index: number }) => {
    return (
      <Card
        style={{
          borderRadius: padding,
          padding,
          flexDirection: "row",
          marginBottom: padding,
          paddingVertical: padding * 2,
          overflow: "hidden",
        }}
      >
        <Avatar imageUri={item.images[0]} initial={item.title} />

        <Card
          style={{
            marginLeft: padding,
            flex: 1,
          }}
        >
          <Card
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <Card>
              <H3>Store{index + 1}</H3>
              <Body2>Followed {index + 1} month ago</Body2>
            </Card>
            <MaterialIcons name="more-horiz" size={24} color={color} />
          </Card>

          <Card
            style={{ flexDirection: "row", flex: 1, paddingVertical: padding }}
          >
            {item.images.map((imageUri, index) => {
              return (
                <Button key={index} style={{ marginRight: padding }}>
                  <Image
                    source={{ uri: imageUri }}
                    style={{
                      height: 50,
                      width: 50,
                      resizeMode: "cover",
                      borderRadius: padding * 0.5,
                    }}
                  />
                </Button>
              );
            })}
          </Card>
        </Card>
      </Card>
    );
  };

  return (
    <View style={{ flex: 1, padding }}>
      <ListFlat data={products}>{(props) => <StorePost {...props} />}</ListFlat>
    </View>
  );
};
export default FollowedStores;
