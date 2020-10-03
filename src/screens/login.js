import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Done(props) {
  return (
    <View style={styles.container}>
      <Icon name="arrow-left" style={styles.icon1}></Icon>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Done")}
        style={styles.button1}
      >
        <Text style={styles.proximo1}>PROXIMO</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="PALAVRA PASSE"
        textBreakStrategy="highQuality"
        disableFullscreenUI={false}
        clearTextOnFocus={false}
        secureTextEntry={true}
        style={styles.oSeuNome2}
      ></TextInput>
      <TextInput
        placeholder="SEU NOME"
        textBreakStrategy="highQuality"
        disableFullscreenUI={false}
        clearTextOnFocus={false}
        style={styles.oSeuNome3}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,231,28,1)"
  },
  icon1: {
    color: "rgba(200,5,5,1)",
    fontSize: 40,
    marginTop: 100,
    marginLeft: 33
  },
  button1: {
    width: 254,
    height: 56,
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 32,
    marginTop: 421,
    marginLeft: 58
  },
  proximo1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 13,
    marginLeft: 75
  },
  oSeuNome2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 286,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(208,2,27,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.81,
    shadowRadius: 0,
    borderRadius: 10,
    marginTop: -213,
    marginLeft: 42
  },
  oSeuNome3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 286,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(208,2,27,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.81,
    shadowRadius: 0,
    borderRadius: 10,
    marginTop: -124,
    marginLeft: 42
  }
});

export default Done;
