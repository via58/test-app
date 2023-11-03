import React, { useState } from "react";
import { ImageBackground, Button, View, Text, TextInput } from "react-native";
import { LoginStyle } from "../assets/AppStyle.js";
import { verifyUser } from "./userInformations.js";
const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export const LoginComponent = () => {
  const Iuser = { name: "", password: "" };
  const [user, setUserinfo] = useState(Iuser);
  const [isLoggedIn, setLogin] = useState(false);
  const onChangeName = (e, fielName) => {
    setUserinfo({ ...user, [fielName]: e });
  };
  const onLogin = () => {
    if (verifyUser(user) !== -1) {
      setUserinfo(Iuser);
      setLogin(!isLoggedIn);
    }
  };
  return (
    <View style={LoginStyle.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={LoginStyle.image}
      >
        {!isLoggedIn ? (
          <>
            <Text style={LoginStyle.text}>Login</Text>
            <TextInput
              style={LoginStyle.input}
              onChangeText={(e) => onChangeName(e, "name")}
              value={user?.name}
              placeholder="Enter User Name"
              keyboardType="numeric"
            />
            <TextInput
              style={LoginStyle.input}
              onChangeText={(e) => onChangeName(e, "password")}
              value={user?.password}
              placeholder="Enter the Password"
              keyboardType="numeric"
            />

            <Button
              title="Login"
              accessibilityLabel="Learn more about this login button"
              onPress={() => onLogin()}
            />
          </>
        ) : (
          <>
            <Text style={LoginStyle.text}>Logged in sucessfully</Text>
            <Button
              title="Log out"
              color="red"
              accessibilityLabel="Learn more about this login button"
              onPress={() => setLogin(false)}
            />
          </>
        )}
      </ImageBackground>
    </View>
  );
};
