export interface BlogPost {
  id: number;
  title: string;
  date: Date;
  fileName: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 0,
    title: "📌 Starting a Dev Blog",
    date: new Date("29 January 2025"),
    fileName: '2025-01-29.md'
  },
  {
    id: 1,
    title: "Project Planning and Design - Indie RPG",
    date: new Date("30 January 2025"),
    fileName: '2025-01-30.md'
  },
  {
    id: 2,
    title: "Tile-Based Movement and Combat",
    date: new Date("5 February 2025"),
    fileName: '2025-02-05.md'
  }
  // Add more posts here...
];