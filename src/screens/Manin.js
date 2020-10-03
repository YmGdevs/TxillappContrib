import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Manin(props) {
  return (
    <View style={styles.container}>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>
          Aqui encontras todas vibes {"\n"}para curtir de uma forma {"\n"}
          moderna
        </Text>
        <Text style={styles.loremIpsum2}></Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Telemovel")}
        style={styles.button}
      >
        <Text style={styles.bemVindoAoTxilapp}>BEM-VINDO AO TXILAPP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(244,228,31,1)"
  },
  loremIpsum: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "alata-regular",
    color: "rgba(208,2,27,1)",
    height: 328,
    width: 265,
    fontSize: 40,
    textAlign: "justify"
  },
  loremIpsum2: {
    top: 90,
    left: 99,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsumStack: {
    width: 265,
    height: 328,
    marginTop: 93,
    marginLeft: 47
  },
  button: {
    width: 293,
    height: 55,
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 25,
    marginTop: 152,
    marginLeft: 39
  },
  bemVindoAoTxilapp: {
    fontFamily: "alatsi-regular",
    color: "rgba(238,238,238,1)",
    fontSize: 25,
    marginTop: 12,
    marginLeft: 20
  }
});

export default Manin;
