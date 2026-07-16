export interface BlogSection {
  heading?: string;
  subheading?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  date: string;
  tags: string[];
  isFeatured?: boolean;
  content?: BlogSection[];
}

import { blogsData } from './blogs';
import { caseStudiesData } from './caseStudies';

export const mockPosts: BlogPost[] = [
  ...blogsData,
  ...caseStudiesData
];
