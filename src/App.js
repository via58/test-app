import React from "react";
import { ImageBackground, View } from "react-native";
import { AppStyle } from "./assets/AppStyle";
import { LoginComponent } from "./components/Login";
const bgImg =
  "https://img.freepik.com/free-vector/vibrant-fluid-gradient-background-with-curvy-shapes_1017-32108.jpg";
function App() {
  return (
    <View style={AppStyle.container}>
      <ImageBackground source={bgImg} resizeMode="cover" style={AppStyle.image}>
        <LoginComponent></LoginComponent>
      </ImageBackground>
    </View>
  );
}

export default App;
