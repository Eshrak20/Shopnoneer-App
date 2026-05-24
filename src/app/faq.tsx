import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FAQScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#071C28]">
      <View className="flex-1 items-center justify-center px-5 pb-28">
        <Text
          className="text-2xl text-white"
          style={{ fontFamily: "NotoSerifBengali_700Bold" }}
        >
          FAQ
        </Text>

        <Text className="mt-3 text-center text-base text-white/60">
          এখানে সাধারণ প্রশ্ন এবং উত্তর দেখানো হবে।
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FAQScreen;