export interface NewsEntity {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  authorId: number;
  slug: string;
  createdAt: Date;
}