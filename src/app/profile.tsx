import { UserRound } from "lucide-react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#071C28]">
      <View className="flex-1 items-center justify-center px-5 pb-28">
        <View className="mb-5 h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/10">
          <UserRound size={46} color="rgba(255,255,255,0.8)" />
        </View>

        <Text
          className="text-2xl text-white"
          style={{ fontFamily: "NotoSerifBengali_700Bold" }}
        >
          প্রোফাইল
        </Text>

        <Text className="mt-3 text-center text-base text-white/60">
          এখানে ইউজারের প্রোফাইল তথ্য দেখানো হবে।
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;