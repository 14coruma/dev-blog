export interface BlogPost {
  id: number;
  title: string;
  date: Date;
  fileName: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Starting a Dev Blog",
    date: new Date("01-29-2025"),
    fileName: '2025-01-29.md'
  },
  // Add more posts here...
];