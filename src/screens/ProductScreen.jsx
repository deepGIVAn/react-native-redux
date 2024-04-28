import React from "react";
import products from "../data/products";
import { FlatList, Image, StyleSheet, View } from "react-native";

const ProductScreen = () => {
  return (
    <>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{
                // uri: "https://plus.unsplash.com/premium_photo-1669689974101-55f9aea22158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
                uri: item.image,
              }}
              style={styles.image}
            />
          </View>
        )}
        numColumns={2}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

export default ProductScreen;
