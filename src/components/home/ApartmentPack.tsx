import { flatData, type FlatPackageItem } from "@/data/flat.data";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  Bath,
  BedDouble,
  Building2,
  ChevronRight,
  DoorOpen,
} from "lucide-react-native";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const ApartmentPack = () => {
  const router = useRouter();

  const visibleFlatData = flatData.slice(0, 7);

  const handleSeeAll = () => {
    router.push("/apartment");
  };

  const handleCardPress = (item: FlatPackageItem) => {
    console.log("Apartment preset clicked:", {
      id: item.id,
      title: item.title,
      location: item.location,
      bed: item.bed,
      bath: item.bath,
      balcony: item.balcony,
      size: item.size,
      price: item.price,
    });

    // Later when apartment filter is ready:
    // router.push({
    //   pathname: "/apartment",
    //   params: {
    //     bed: item.bed,
    //     bath: item.bath,
    //     balcony: item.balcony,
    //   },
    // });
  };

  return (
    <View className="w-full">
      {/* Header */}
      <View className="mb-4 flex-row items-center justify-between px-1">
        <Text
          className="text-[28px] text-white"
          style={{ fontFamily: "NotoSerifBengali_700Bold" }}
        >
          সাম্প্রতিক বিজ্ঞাপন
        </Text>

        <Pressable
          onPress={handleSeeAll}
          className="flex-row items-center gap-1 active:opacity-70"
        >
          <Text
            className="text-[18px] text-[#00d6c3]"
            style={{ fontFamily: "NotoSerifBengali_700Bold" }}
          >
            সব দেখুন
          </Text>

          <ChevronRight size={24} color="#00d6c3" strokeWidth={2.5} />
        </Pressable>
      </View>

      {/* Cards */}
      <ScrollView
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="gap-4"
      >
        {visibleFlatData.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => handleCardPress(item)}
            className="overflow-hidden rounded-[26px] active:scale-[0.99]"
          >
            <BlurView intensity={50} tint="dark" className="overflow-hidden">
              <LinearGradient
                colors={[
                  "rgba(255,255,255,0.14)",
                  "rgba(255,255,255,0.07)",
                  "rgba(0,214,195,0.07)",
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="rounded-[26px] border border-white/15 p-[1px]"
              >
                <View className="min-h-[174px] flex-row rounded-[25px] bg-[#0a2330]/55 p-4">
                  {/* Image */}
                  <View className="h-[120px] w-[132px] overflow-hidden rounded-[20px] border border-white/10 bg-white/10">
                    <Image
                      source={item.image}
                      resizeMode="cover"
                      className="h-full w-full"
                    />
                  </View>

                  {/* Content */}
                  <View className="ml-4 flex-1 justify-between">
                    <View>
                      <Text
                        numberOfLines={1}
                        className="text-[24px] leading-[34px] text-white"
                        style={{ fontFamily: "NotoSerifBengali_700Bold" }}
                      >
                        {item.title}
                      </Text>

                      <Text
                        numberOfLines={1}
                        className="mt-1 text-[16px] text-white/70"
                        style={{ fontFamily: "NotoSerifBengali_700Bold" }}
                      >
                        {item.location}
                      </Text>
                    </View>

                    <View className="mt-2 gap-2">
                      <View className="flex-row items-center gap-6">
                        <View className="flex-row items-center gap-1.5">
                          <BedDouble
                            size={19}
                            color="rgba(255,255,255,0.72)"
                          />
                          <Text
                            className="text-[15px] text-white/75"
                            style={{ fontFamily: "NotoSerifBengali_700Bold" }}
                          >
                            {item.bed} বেড
                          </Text>
                        </View>

                        <View className="flex-row items-center gap-1.5">
                          <Bath size={19} color="rgba(255,255,255,0.72)" />
                          <Text
                            className="text-[15px] text-white/75"
                            style={{ fontFamily: "NotoSerifBengali_700Bold" }}
                          >
                            {item.bath} বাথ
                          </Text>
                        </View>
                      </View>

                      <View className="flex-row items-center gap-1.5">
                        <DoorOpen size={19} color="rgba(255,255,255,0.72)" />
                        <Text
                          className="text-[15px] text-white/75"
                          style={{ fontFamily: "NotoSerifBengali_700Bold" }}
                        >
                          {item.balcony} বারান্দা
                        </Text>
                      </View>

                      <View className="flex-row items-center gap-1.5">
                        <Building2 size={19} color="rgba(255,255,255,0.72)" />
                        <Text
                          className="text-[15px] text-white/75"
                          style={{ fontFamily: "NotoSerifBengali_700Bold" }}
                        >
                          {item.size}
                        </Text>
                      </View>
                    </View>
                  </View>

                  {/* Price */}
                  <View className="absolute bottom-5 right-4">
                    <Text
                      className="text-right text-[20px] text-[#00d6c3]"
                      style={{ fontFamily: "NotoSerifBengali_700Bold" }}
                    >
                      {item.price}
                      {item.priceSuffix ? (
                        <Text
                          className="text-[16px] text-[#00d6c3]"
                          style={{ fontFamily: "NotoSerifBengali_700Bold" }}
                        >
                          {" "}
                          {item.priceSuffix}
                        </Text>
                      ) : null}
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </BlurView>
          </Pressable>
        ))}

        
 
      </ScrollView>
    </View>
  );
};

export default ApartmentPack;