import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Nome(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.criarConta1}>CRIAR CONTA</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Password")}
        style={styles.button}
      >
        <Text style={styles.proximo1}>PROXIMO</Text>
      </TouchableOpacity>
      <Icon name="arrow-left" style={styles.icon1}></Icon>
      <TextInput
        placeholder="SEU NOME"
        textBreakStrategy="highQuality"
        disableFullscreenUI={false}
        clearTextOnFocus={false}
        style={styles.oSeuNome1}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,231,28,1)"
  },
  criarConta1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 192,
    alignSelf: "center"
  },
  button: {
    width: 254,
    height: 56,
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 32,
    marginTop: 348,
    marginLeft: 58
  },
  proximo1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 13,
    marginLeft: 75
  },
  icon1: {
    color: "rgba(200,5,5,1)",
    fontSize: 40,
    marginTop: -520,
    marginLeft: 33
  },
  oSeuNome1: {
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
    marginTop: 238,
    marginLeft: 42
  }
});

export default Nome;
