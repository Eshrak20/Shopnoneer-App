import { ImageBackground, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import Header from "@/components/home/Header";
import Slider from "@/components/home/Silder/Slider";
import HousingPackages from "@/components/home/HousingPackages";
import FlatPackages from "@/components/home/FlatPackages";
import ApartmentPack from "@/components/home/ApartmentPack";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/app-bg2.png")}
      resizeMode="cover"
      className="flex-1"
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <View className="flex-1 bg-black/0">
        <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
          <ScrollView
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerClassName="pb-40"
          >
            <Header />

            <View className="px-4 pt-5 gap-6">
              <Slider />
              <FlatPackages />
              <HousingPackages />
              <ApartmentPack />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;