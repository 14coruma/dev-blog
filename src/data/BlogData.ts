export interface BlogPost {
  id: string;
  title: string;
  date: string;
  fileName: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Week 1 - Starting the Dev Blog",
    date: "2025-01-29",
    fileName: '2025-01-29.md'
  },
  // Add more posts here...
];