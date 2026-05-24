export type FlatPackageItem = {
  id: string;
  title: string;
  bed: number;
  bath: number;
  balcony: number;
  type: "preset" | "custom";
};

export const flatPackagesData: FlatPackageItem[] = [
  {
    id: "1",
    title: "3 Bed, 2 Bath, 1 Balcony",
    bed: 3,
    bath: 2,
    balcony: 1,
    type: "preset",
  },
  {
    id: "2",
    title: "2 Bed, 1 Bath, 1 Balcony",
    bed: 2,
    bath: 1,
    balcony: 1,
    type: "preset",
  },
  {
    id: "3",
    title: "2 Bed, 2 Bath, 1 Balcony",
    bed: 2,
    bath: 2,
    balcony: 1,
    type: "preset",
  },
  {
    id: "4",
    title: "1 Bed, 1 Bath, 1 Balcony",
    bed: 1,
    bath: 1,
    balcony: 1,
    type: "preset",
  },
  {
    id: "5",
    title: "Custom Preset",
    bed: 0,
    bath: 0,
    balcony: 0,
    type: "custom",
  },
  {
    id: "6",
    title: "Custom Preset",
    bed: 0,
    bath: 0,
    balcony: 0,
    type: "custom",
  },
  {
    id: "7",
    title: "Custom Preset",
    bed: 0,
    bath: 0,
    balcony: 0,
    type: "custom",
  },
  {
    id: "8",
    title: "Custom Preset",
    bed: 0,
    bath: 0,
    balcony: 0,
    type: "custom",
  },
];