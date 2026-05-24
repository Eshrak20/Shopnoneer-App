import { Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View className="w-full items-center justify-center pt-0 mt-5">
      <View className="flex-row items-center justify-center ">
        {/* <Image
          source={require("../../../assets/images/logo.png")}
          className="h-[29px] w-[90px]"
          resizeMode="cover"
        /> */}

        <Text className="font-bangla text-[28px] text-white">
          স্বপ্ননীড়
        </Text>
      </View>
    </View>
  );
};

export default Header;