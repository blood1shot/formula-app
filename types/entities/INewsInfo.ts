export interface INewsInfo {
  id: number;
  imgSource: string | string[];
  imgGallery?: boolean;
  videoSource?: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  createdAt: string;
  author: string;
  tags: string[];
}
