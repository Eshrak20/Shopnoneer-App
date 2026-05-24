import {
  housingPackagesData,
  type HousingPackageItem,
} from "@/data/housingPackages.data";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { memo } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const CARD_WIDTH = 175;
const CARD_HEIGHT = 230;
const CARD_GAP = 16;

const HousingPackages = () => {
  const router = useRouter();

  const handleSeeAll = () => {
    router.push("/apartment");
  };

  const handleCardPress = (item: HousingPackageItem) => {
    console.log("Housing project clicked:", {
      name: item.name,
      location: item.location,
    });

    // Later:
    // router.push({
    //   pathname: "/apartment",
    //   params: {
    //     housingName: item.name,
    //     location: item.location,
    //   },
    // });
  };

  return (
    <View className="w-full">
      {/* Section Header */}
      <View className="mb-3 flex-row items-center justify-between px-1">
        <Text className="font-bangla text-[24px] font-semibold text-white">
          হাউজিং প্যাকেজ
        </Text>

        <Pressable
          onPress={handleSeeAll}
          className="flex-row items-center gap-1 active:opacity-70"
        >
          <Text className="font-bangla text-[17px] font-medium text-[#13C8B5]">
            সব দেখুন
          </Text>

          <ChevronRight size={22} color="#13C8B5" strokeWidth={2.5} />
        </Pressable>
      </View>

      {/* Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingRight: 16,
          gap: CARD_GAP,
        }}
      >
        {housingPackagesData.map((item) => (
          <HousingCard
            key={item.id}
            item={item}
            onPress={() => handleCardPress(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

type HousingCardProps = {
  item: HousingPackageItem;
  onPress: () => void;
};

const HousingCard = memo(({ item, onPress }: HousingCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      }}
      className="overflow-hidden rounded-[22px] border border-white/25 active:scale-[0.98]"
    >
      {/* Blur Transparent Card BG */}
      <BlurView
        intensity={25}
        tint="dark"
        style={{
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Transparent Gradient Layer */}
      <LinearGradient
        colors={[
          "rgba(255,255,255,0.10)",
          "rgba(8,45,52,0.42)",
          "rgba(8,45,52,0.58)",
        ]}
        style={{
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Image */}
      <View className="relative h-[118px] w-full overflow-hidden">
        <Image
          source={item.image}
          resizeMode="cover"
          className="h-full w-full"
        />

        {/* Image Bottom Fade */}
        <LinearGradient
          colors={["transparent", "rgba(4,28,34,0.75)"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 45,
          }}
        />

        {/* Status Badge */}
        <View className="absolute right-3 top-3 rounded-[8px] bg-[#12C8B4] px-3 py-1.5">
          <Text className="text-[16px] font-semibold text-white">
            {item.status}
          </Text>
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 justify-center px-4 pb-4 pt-2">
        <Text
          numberOfLines={1}
          className="font-bangla text-[20px] font-semibold leading-7 text-white"
        >
          {item.name}
        </Text>

        <Text
          numberOfLines={1}
          className="font-bangla mt-1 text-[16px] font-medium text-white/85"
        >
          {item.location}
        </Text>
      </View>
    </Pressable>
  );
});

HousingCard.displayName = "HousingCard";

export default HousingPackages;