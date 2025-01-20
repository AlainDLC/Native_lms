export interface Course {
  id?: string;
  name?: string;
  description?: {
    markdown: string;
  };
  level?: string | number;
  price?: string | number;
  time?: string;
  author?: string;
  banner?: { url: string } | null;
  capters?: {
    id: string;
    tilte: string;
    content: {
      heading: string;
      description: {
        markdown: string;
      };
      output: {
        markdown: string;
      };
    };
  }[];
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
  value: string | number | undefined;
  icon: IconName;
}
