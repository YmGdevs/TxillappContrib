import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Telemovel(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.criarConta}>CRIAR CONTA</Text>
      <View style={styles.textInputStack}>
        <TextInput placeholder="" style={styles.textInput}></TextInput>
        <TextInput
          placeholder="Numero de telemovel"
          textBreakStrategy="highQuality"
          disableFullscreenUI={false}
          clearTextOnFocus={false}
          style={styles.oSeuNome}
        ></TextInput>
      </View>
      <TextInput placeholder="" style={styles.textInput2}></TextInput>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Nome")}
        style={styles.button}
      >
        <Text style={styles.proximo}>PROXIMO</Text>
      </TouchableOpacity>
      <Icon name="arrow-left" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,231,28,1)"
  },
  criarConta: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 192,
    alignSelf: "center"
  },
  textInput: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 296
  },
  oSeuNome: {
    top: 23,
    left: 9,
    position: "absolute",
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
    borderRadius: 10
  },
  textInputStack: {
    width: 296,
    height: 73,
    marginTop: 145,
    marginLeft: 33
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 100,
    width: 100,
    marginLeft: 33
  },
  button: {
    width: 254,
    height: 56,
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 32,
    marginTop: 30,
    marginLeft: 58
  },
  proximo: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 13,
    marginLeft: 75
  },
  icon: {
    color: "rgba(200,5,5,1)",
    fontSize: 40,
    marginTop: -520,
    marginLeft: 33
  }
});

export default Telemovel;
