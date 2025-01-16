export interface Course {
  id: string;
  name: string;
  description: {
    markdown: string;
  };
  level: string;
  price: string | number;
  time: string;
  author: string;
  banner: { url: string } | null;
  capters: { id: string }[];
}

export interface CourseItemProps {
  item: {
    name: string;
    capters: { id: string }[];
    time: string;
    price: number | string;
    banner: { url: string } | null;
  };
}

type IconName =
  | "book-outline"
  | "home"
  | "clock-outline"
  | "account"
  | "cellular-outline"
  | "celluar-outline"
  | "map-marker"
  | "time-outline"
  | "person-circle-outline";

export interface OptionItemProps {
  value: string | number;
  icon: IconName;
}
