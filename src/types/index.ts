// File: src/types/index.ts
export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
  }
  
  export interface Testimonial {
    id: number;
    text: string;
    author: string;
  }
  
  export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    date: string;
    url: string;
  }
  
  export interface FaqItem {
    id: number;
    question: string;
    answer: string;
    category: string;
  }