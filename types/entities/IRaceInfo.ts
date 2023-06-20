export interface IRaceInfo {
  id: number;
  title: string;
  country: string;
  time: string;
  date: string;
  locale: string;
  description: {
    text: string;
    links: Array<{ name: string; href: string }>;
  };
}
