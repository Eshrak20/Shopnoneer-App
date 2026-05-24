import { sliderData, type SliderItem } from "@/data/slider.data";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight } from "lucide-react-native";
import { ImageBackground, Text, View } from "react-native";

type Props = {
  item: SliderItem;
  sliderWidth: number;
};

const SliderUI = ({ item, sliderWidth }: Props) => {
  return (
    <View
      style={{ width: sliderWidth }}
      className="h-[245px] overflow-hidden rounded-[28px]"
    >
      <ImageBackground
        source={{ uri: item.image }}
        resizeMode="cover"
        className="h-full w-full overflow-hidden rounded-[28px]"
      >
        {/* Dark overlay */}
        <LinearGradient
          colors={[
            "rgba(19,39,95,0.78)",
            "rgba(19,39,95,0.35)",
            "rgba(0,0,0,0.55)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0"
        />

        {/* Glass blur layer */}
        <BlurView
          intensity={25}
          tint="dark"
          experimentalBlurMethod="dimezisBlurView"
          blurReductionFactor={2}
          className="absolute inset-x-4 top-4 bottom-4 overflow-hidden rounded-[26px] border border-white/20"
        >
          <View className="flex-1 bg-white/10" />
        </BlurView>

        {/* Floating text content */}
        <View className="relative flex-1 justify-center px-8">
          <Text className="max-w-[500px] text-[34px] font-bold leading-[44px] text-white">
            {item.title}
          </Text>

          <Text className="mt-2 max-w-[250px] text-[18px] leading-[28px] text-white/90">
            {item.subtitle}
          </Text>

          {/* Non functional alternative design */}
          <View className="mt-7 self-start rounded-2xl border border-white/20 bg-white/15 px-4 py-3">
            <View className="flex-row items-center gap-2">
              <View className="h-2.5 w-2.5 rounded-full bg-[#8FB4FF]" />

              <Text className="text-[15px] font-semibold text-white">
                {item.tag}
              </Text>

              <View className="ml-1 h-7 w-7 items-center justify-center rounded-full bg-[#8FB4FF]/25">
                <ChevronRight size={17} color="#ffffff" strokeWidth={2.5} />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SliderUI;