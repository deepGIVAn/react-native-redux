import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductScreen from "./src/screens/ProductScreen";
import ProductScreenDetails from "./src/screens/ProductScreenDetails";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      <ProductScreenDetails />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
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
