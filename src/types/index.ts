export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}