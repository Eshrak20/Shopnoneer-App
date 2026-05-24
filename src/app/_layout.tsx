import "../../global.css";

import BottomTabs from "@/components/BottomTabs";
import {
  NotoSerifBengali_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-serif-bengali";
import { Slot } from "expo-router";
import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    NotoSerifBengali_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View className="flex-1 bg-white">
        <Slot />

        <BottomTabs />
      </View>
    </Provider>
  );
}