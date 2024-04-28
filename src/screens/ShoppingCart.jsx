import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDeliveryFee,
  selectSubTotal,
  selectTotal,
} from "../store/cartSlice";

const ShoppingCartTotals = () => {
  const subTotal = useSelector(selectSubTotal);
  const deleiveryFee = useSelector(selectDeliveryFee);
  const total = useSelector(selectTotal);

  return (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>$ {subTotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>$ {deleiveryFee}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.textBold}>$ {total}</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 16,
  },
});

export default ShoppingCart;
