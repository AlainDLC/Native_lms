export interface Course {
  id: string;
  name: string;
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
