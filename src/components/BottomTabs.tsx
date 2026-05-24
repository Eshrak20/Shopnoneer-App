import { BlurView } from "expo-blur";
import { usePathname, useRouter } from "expo-router";
import {
  CircleHelp,
  Home,
  Megaphone,
  Search,
  UserRound,
} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TabItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    strokeWidth?: number;
  }>;
};

const tabs: TabItem[] = [
  {
    label: "হোম",
    href: "/",
    icon: Home,
  },
  {
    label: "খুঁজুন",
    href: "/apartment",
    icon: Search,
  },
  {
    label: "বিজ্ঞাপন",
    href: "/advertisement",
    icon: Megaphone,
  },
  {
    label: "FAQ",
    href: "/faq",
    icon: CircleHelp,
  },
  {
    label: "প্রোফাইল",
    href: "/profile",
    icon: UserRound,
  },
];

const ACTIVE_COLOR = "#18D4C2";
const INACTIVE_COLOR = "rgba(255,255,255,0.62)";

const BottomTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <View
      pointerEvents="box-none"
      className="absolute bottom-0 left-0 right-0 z-50 px-3"
      style={{
        paddingBottom: Math.max(insets.bottom, 10),
      }}
    >
      <BlurView
        intensity={35}
        tint="dark"
        className="overflow-hidden rounded-[34px] border border-white/12"
      >
        <View className="flex-row items-center justify-between bg-[#102736]/55 px-3 py-3">
          {tabs.map((tab) => {
            const active = isActiveRoute(tab.href);
            const Icon = tab.icon;

            return (
              <Pressable
                key={tab.href}
                onPress={() => router.push(tab.href as never)}
                className="flex-1 items-center justify-center gap-1"
                android_ripple={{
                  color: "rgba(255,255,255,0.08)",
                  borderless: true,
                }}
              >
                <Icon
                  size={active ? 30 : 28}
                  color={active ? ACTIVE_COLOR : INACTIVE_COLOR}
                  strokeWidth={active ? 2.8 : 2}
                />

                <Text
                  className="text-[13px]"
                  style={{
                    color: active ? ACTIVE_COLOR : INACTIVE_COLOR,
                    fontFamily: "NotoSerifBengali_700Bold",
                  }}
                  numberOfLines={1}
                >
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </BlurView>
    </View>
  );
};

export default BottomTabs;