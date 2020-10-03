import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Done(props) {
  return (
    <View style={styles.container}>
      <Icon name="arrow-left" style={styles.icon1}></Icon>
      <Text style={styles.congratss}>CONGRATSS</Text>
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
  congratss: {
    fontFamily: "roboto-regular",
    color: "rgba(208,2,27,1)",
    fontSize: 48,
    marginTop: 49,
    marginLeft: 36
  }
});

export default Done;
