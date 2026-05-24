import type { ImageSourcePropType } from "react-native";

export type FlatPackageItem = {
  id: number;
  title: string;
  location: string;
  bed: number;
  bath: number;
  balcony: number;
  size: string;
  price: string;
  priceSuffix?: string;
  image: ImageSourcePropType;
};

export const flatData: FlatPackageItem[] = [
  {
    id: 1,
    title: "মিরপুরে রেডি ফ্ল্যাট বিক্রি",
    location: "মিরপুর, ঢাকা",
    bed: 3,
    bath: 2,
    balcony: 1,
    size: "১২৫০ স্কয়ার ফিট",
    price: "৳ ৬৫ লাখ",
    image: require("../../assets/images/flat-1.png"),
  },
  {
    id: 2,
    title: "বনানীতে অ্যাপার্টমেন্ট ভাড়া",
    location: "বনানী, ঢাকা",
    bed: 3,
    bath: 3,
    balcony: 1,
    size: "১৫০০ স্কয়ার ফিট",
    price: "৳ ৪৫ লাখ",
    // priceSuffix: "/ মাস",
    image: require("../../assets/images/flat-2.jpeg"),
  },
  {
    id: 3,
    title: "ধানমন্ডিতে ফ্যামিলি ফ্ল্যাট",
    location: "ধানমন্ডি, ঢাকা",
    bed: 2,
    bath: 2,
    balcony: 1,
    size: "১১০০ স্কয়ার ফিট",
    price: "৳ ৫৫ লাখ",
    image: require("../../assets/images/flat-3.jpeg"),
  },
  {
    id: 4,
    title: "উত্তরায় সুন্দর অ্যাপার্টমেন্ট",
    location: "উত্তরা, ঢাকা",
    bed: 2,
    bath: 1,
    balcony: 1,
    size: "৯৫০ স্কয়ার ফিট",
    price: "৳ ৩৫ লাখ",
    // priceSuffix: "/ মাস",
    image: require("../../assets/images/flat-4.jpeg"),
  },
];