import { ScrollView, View } from "react-native";

import Header from "@/components/home/Header";
import Slider from "@/components/home/Slider";
import Packages from "@/components/home/Packages";
import HousingPackages from "@/components/home/HousingPackages";

const HomeScreen = () => {
  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View className="px-4 pt-4 gap-6">
        <Header />
        <Slider />
        <Packages />
        <HousingPackages />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;