export type SliderItem = {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  image?: string;
};

export const sliderData: SliderItem[] = [
  {
    id: 1,
    title: "আপনার স্বপ্নের",
    subtitle: "প্রজেক্ট শুরু হোক এখান থেকেই",
    tag: "স্বপ্নের ঠিকানা",

  },
  {
    id: 2,
    title: "সুন্দর ঘর",
    subtitle: "আপনার পরিবারের জন্য সেরা পরিকল্পনা",
    tag: "নতুন জীবনধারা",
  
  },
  {
    id: 3,
    title: "আধুনিক ডিজাইন",
    subtitle: "প্রতিটি প্রজেক্টে থাকবে প্রিমিয়াম ফিল",
    tag: "প্রিমিয়াম হোম",

  },
  {
    id: 4,
    title: "নিরাপদ বিনিয়োগ",
    subtitle: "আপনার ভবিষ্যতের জন্য বিশ্বাসযোগ্য ঠিকানা",
    tag: "বিশ্বাসের প্রজেক্ট",

  },
];