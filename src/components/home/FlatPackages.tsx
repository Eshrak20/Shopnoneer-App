import {
  flatPackagesData,
  type FlatPackageItem,
} from "@/data/flatPackagess.data";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import {
  Bath,
  BedDouble,
  ChevronRight,
  DoorOpen,
  Plus,
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";

const CARD_WIDTH = 135;
const CARD_HEIGHT = 145;
const CARD_GAP = 12;
const ROW_COUNT = 2;

const SECTION_HEIGHT = CARD_HEIGHT * ROW_COUNT + CARD_GAP;

const FlatPackages = () => {
  const router = useRouter();

  const totalColumns = Math.ceil(flatPackagesData.length / ROW_COUNT);
  const contentWidth =
    totalColumns * CARD_WIDTH + (totalColumns - 1) * CARD_GAP;

  const handleSeeAll = () => {
    router.push("/apartment");
  };

  const handlePackagePress = (item: FlatPackageItem) => {
    if (item.type === "custom") {
      console.log("Custom preset clicked:", item.id);
      return;
    }

    console.log("Flat package clicked:", {
      bed: item.bed,
      bath: item.bath,
      balcony: item.balcony,
    });

    // Later filter ready hole eta use korba
    // router.push({
    //   pathname: "/apartment",
    //   params: {
    //     bed: item.bed,
    //     bath: item.bath,
    //     balcony: item.balcony,
    //   },
    // });
  };

  const renderMiniIcons = (item: FlatPackageItem) => {
    if (item.type === "custom") {
      return (
        <View className="mb-4 h-12 w-12 items-center justify-center rounded-full bg-teal-500/20">
          <Plus size={32} color="#14c8b8" strokeWidth={2.5} />
        </View>
      );
    }

    return (
      <View className="mb-4 flex-row items-center justify-center gap-2.5">
        <View className="items-center gap-1">
          <BedDouble size={26} color="#14c8b8" strokeWidth={2.4} />
          <Text className="text-[11px] font-semibold text-white/85">
            {item.bed}
          </Text>
        </View>

        <View className="items-center gap-1">
          <Bath size={24} color="#14c8b8" strokeWidth={2.4} />
          <Text className="text-[11px] font-semibold text-white/85">
            {item.bath}
          </Text>
        </View>

        <View className="items-center gap-1">
          <DoorOpen size={24} color="#14c8b8" strokeWidth={2.4} />
          <Text className="text-[11px] font-semibold text-white/85">
            {item.balcony}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View className="gap-4">
      {/* Header */}
      <View className="flex-row items-center justify-between">
        <Text className="text-[24px] font-bangla font-bold text-white">
          ফ্ল্যাট খুঁজুন
        </Text>

        <Pressable
          onPress={handleSeeAll}
          className="flex-row items-center gap-1 active:opacity-70"
        >
          <Text className="text-base font-bangla font-semibold text-teal-400">
            সব দেখুন
          </Text>
          <ChevronRight size={24} color="#14c8b8" strokeWidth={2.5} />
        </Pressable>
      </View>

      {/* Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: SECTION_HEIGHT }}
        contentContainerStyle={{
          paddingRight: 16,
        }}
      >
        <View
          style={{
            width: contentWidth,
            height: SECTION_HEIGHT,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: CARD_GAP,
          }}
        >
          {flatPackagesData.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => handlePackagePress(item)}
              style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
              }}
              className="overflow-hidden rounded-[20px] border border-white/25 active:scale-[0.98]"
            >
              <BlurView
                intensity={65}
                tint="dark"
                className="flex-1 items-center justify-center bg-white/10 px-2"
              >
                {renderMiniIcons(item)}

                <Text className="text-center text-[13px] font-bold leading-5 text-white">
                  {item.type === "custom" ? "নিজের মতো" : item.title}
                </Text>

                <Text className="mt-1.5 text-center text-[12px] leading-4 text-white/60">
                  {item.type === "custom"
                    ? "কাস্টম প্রিসেট বানান"
                    : "সহজে ফিল্টার করুন"}
                </Text>
              </BlurView>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FlatPackages;