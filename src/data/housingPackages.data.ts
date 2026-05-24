import type { ImageSourcePropType } from "react-native";

export type HousingPackageItem = {
  id: string;
  name: string;
  location: string;
  status: string;
  image: ImageSourcePropType;
};

export const housingPackagesData: HousingPackageItem[] = [
  {
    id: "1",
    name: "গ্রীন পার্ক রেসিডেন্সি",
    location: "গুলশান, ঢাকা",
    status: "listed",
    image: require("../../assets/images/housing-1.png"),
  },
  {
    id: "2",
    name: "ধানমন্ডি রেসিডেন্সি",
    location: "ধানমন্ডি, ঢাকা",
    status: "listed",
    image: require("../../assets/images/housing-2.png"),
  },
  {
    id: "3",
    name: "উত্তরা হাইটস",
    location: "উত্তরা, ঢাকা",
    status: "listed",
    image: require("../../assets/images/housing-3.png"),
  },
  {
    id: "4",
    name: "বনানী স্কাইভিউ",
    location: "বনানী, ঢাকা",
    status: "listed",
    image: require("../../assets/images/housing-4.png"),
  },
];