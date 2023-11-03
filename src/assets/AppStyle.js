import { StyleSheet } from "react-native";
import { colorCodes } from "./constant";
export const AppStyle = StyleSheet.create({
  container: {
    backgroundColor: colorCodes.acquaGreen,
    height: "100%"
  },
  header: {
    textColor: "red"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});

export const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: "50%",
    textAlign: "center",
    paddingLeft: "10%",
    paddingTop: "25%",
    paddingRight: "10%"
  },
  input: {
    backgroundColor: "white",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000000c0"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
