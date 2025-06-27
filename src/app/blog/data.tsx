// File: src/app/blog/data.tsx

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development",
    excerpt: "Explore cutting-edge trends shaping the web development landscape.",
    content: "Full content about the future of web development...",
    author: "John Doe",
    date: "2025-06-25",
    imageUrl: "https://www.shutterstock.com/image-vector/application-smartphone-business-graph-analytics-260nw-1583248045.jpg",
    tags: ["web", "future", "trends"]
  },
  {
    id: "2",
    title: "Mastering TypeScript",
    excerpt: "Why every JavaScript developer should embrace TypeScript.",
    content: "Full content on mastering TypeScript...",
    author: "Jane Smith",
    date: "2025-06-24",
    imageUrl: "https://www.shutterstock.com/image-vector/application-smartphone-business-graph-analytics-260nw-1583248045.jpg",
    tags: ["typescript", "javascript"]
  },
  {
    id: "3",
    title: "Build Better PWAs",
    excerpt: "A complete guide to Progressive Web Apps in 2025.",
    content: "Full content on building PWAs...",
    author: "Alice Johnson",
    date: "2025-06-23",
    imageUrl: "https://www.shutterstock.com/image-vector/application-smartphone-business-graph-analytics-260nw-1583248045.jpg",
    tags: ["pwa", "performance"]
  },
  {
    id: "4",
    title: "UI/UX Trends in 2025",
    excerpt: "Neumorphism, glassmorphism, and what's next.",
    content: "Full content on UI/UX trends...",
    author: "David Lee",
    date: "2025-06-22",
    imageUrl: "https://www.shutterstock.com/image-vector/application-smartphone-business-graph-analytics-260nw-1583248045.jpg",
    tags: ["ui", "ux"]
  },
  {
    id: "5",
    title: "Optimizing Performance in React Apps",
    excerpt: "Best practices to speed up your React apps.",
    content: "Full content on React optimization...",
    author: "Emma Stone",
    date: "2025-06-21",
    imageUrl: "https://www.shutterstock.com/image-vector/application-smartphone-business-graph-analytics-260nw-1583248045.jpg",
    tags: ["react", "performance"]
  },
  {
    id: "6",
    title: "Optimizing Performance in React Apps",
    excerpt: "Best practices to speed up your React apps.",
    content: "Full content on React optimization...",
    author: "Emma Stone",
    date: "2025-06-21",
    imageUrl: "https://www.shutterstock.com/image-vector/application-smartphone-business-graph-analytics-260nw-1583248045.jpg",
    tags: ["react", "performance"]
  }
];
