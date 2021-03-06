import { FontAwesome } from "@expo/vector-icons";
import * as React from "react";
import { Image, StyleSheet } from "react-native";

import { Sizes } from "../../constants/Styles";
import { useCartContext } from "../../context/CartContext";
import { CartItem as ItemType } from "../../types/Cart";
import Button from "../button/Button";
import { Card, Text } from "../theme";
import useThemeColor from "../../hooks/useThemeColor";
import { Body1, Body2, H1, H3, H4, H6, Subtitle1 } from "../typography";

const padding = Sizes.base;
const imageHeight = 90;

interface ICartItemProps {
  cartItem: ItemType;
  openMore: boolean;
}

const CartItem: React.FC<ICartItemProps> = ({ cartItem, openMore }) => {
  return (
    <Card style={styles.container}>
      <Card style={{ flexDirection: "row" }}>
        <Subtitle1 style={{ marginBottom: padding }}>Furniture Store</Subtitle1>
      </Card>
      <Card style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: cartItem.product.images[0] }}
          style={styles.img}
        />
        <Card
          style={{
            flex: 1,
            marginLeft: padding,
            justifyContent: "space-between",
          }}
        >
          <Body2 numberOfLines={2}>{cartItem.product.title}</Body2>
          <Card
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Body1 primary>${cartItem.product.price}</Body1>

            {openMore ? (
              <Trash id={cartItem.product.id} />
            ) : (
              <Amount cartItem={cartItem} />
            )}
          </Card>
        </Card>
      </Card>
    </Card>
  );
};

interface ITrashProp {
  id: ItemType["product"]["id"];
}

const Trash = ({ id }: ITrashProp) => {
  const color = useThemeColor({}, "text");
  const { deleteProductFromCart } = useCartContext();
  return (
    <Button
      onPress={() => {
        deleteProductFromCart(id);
      }}
    >
      <FontAwesome name="trash-o" size={24} color={color} />
    </Button>
  );
};

interface IAmountProp {
  cartItem: ItemType;
}

const Amount = ({ cartItem }: IAmountProp) => {
  const { removeProductFromCart, addProductToCart } = useCartContext();
  const borderColor = useThemeColor({}, "text");
  const disabled = cartItem.amount <= 1;

  return (
    <Card style={[styles.amountContainer, { borderColor }]}>
      <Button
        disabled={disabled}
        onPress={() => removeProductFromCart(cartItem.product.id)}
        style={[styles.amountBtn, { borderColor, borderRightWidth: 2 }]}
      >
        <Subtitle1>-</Subtitle1>
      </Button>
      <Card style={{ paddingHorizontal: padding }}>
        <Body2>{cartItem.amount}</Body2>
      </Card>
      <Button
        onPress={() => addProductToCart(cartItem.product)}
        style={[styles.amountBtn, { borderColor, borderLeftWidth: 1 }]}
      >
        <Subtitle1>+</Subtitle1>
      </Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: padding,
    borderRadius: padding,
    paddingVertical: padding,
    paddingHorizontal: padding * 2,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: padding,
    borderWidth: 1,
  },
  amountBtn: {
    paddingHorizontal: padding * 0.5,
  },
  img: {
    height: imageHeight,
    width: imageHeight,
    resizeMode: "cover",
    marginBottom: padding,
  },
});

export default CartItem;
