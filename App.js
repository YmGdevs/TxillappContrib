import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Manin from "./src/screens/Manin";
import Nome from "./src/screens/Nome";
import Telemovel from "./src/screens/Telemovel";
import Password from "./src/screens/Password";
import Done from "./src/screens/Done";

const DrawerNavigation = createDrawerNavigator({
  Manin: Manin,
  Nome: Nome,
  Telemovel: Telemovel,
  Password: Password,
  Done: Done
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Manin: Manin,
    Nome: Nome,
    Telemovel: Telemovel,
    Password: Password,
    Done: Done
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "alata-regular": require("./src/assets/fonts/alata-regular.ttf"),
      "alatsi-regular": require("./src/assets/fonts/alatsi-regular.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
