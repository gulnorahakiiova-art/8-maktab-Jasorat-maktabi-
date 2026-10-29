export type Language = 'uz' | 'ru' | 'en';

export type TeacherCategory = 'oliy' | '1-toifa' | '2-toifa' | 'mutaxassis';

export interface Teacher {
  id: string;
  fullName: Record<Language, string>;
  role: Record<Language, string>;
  subject: Record<Language, string>;
  subjectCode: 'english' | 'physics' | 'math' | 'military' | 'pe' | 'primary' | 'uzbek' | 'other';
  category: TeacherCategory;
  experienceYears: number;
  photo: string;
  bio: Record<Language, string>;
  achievements: Record<Language, string[]>;
  isAdministration?: boolean;
  email?: string;
  phone?: string;
}

export type AchievementCategory = 'math' | 'physics' | 'english' | 'sports' | 'military' | 'other';
export type AchievementLevel = 'district' | 'region' | 'republic' | 'international';

export interface Achievement {
  id: string;
  year: number;
  title: Record<Language, string>;
  studentName: string;
  place: 1 | 2 | 3;
  category: AchievementCategory;
  level: AchievementLevel;
  description: Record<Language, string>;
  photo: string;
  date: string;
}

export interface NewsItem {
  id: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string>;
  date: string;
  category: 'olympiad' | 'jasorat' | 'events' | 'science' | 'sports';
  image: string;
  readTime: string;
  author: string;
}

export type ResourceType = 'pdf' | 'presentation' | 'video' | 'test' | 'worksheet' | 'link';

export interface ResourceItem {
  id: string;
  title: Record<Language, string>;
  subject: 'english' | 'physics' | 'math' | 'military' | 'pe';
  grade: number; // 5 - 11
  type: ResourceType;
  fileSize: string;
  url: string;
  description: Record<Language, string>;
  downloads: number;
}

export interface GalleryItem {
  id: string;
  title: Record<Language, string>;
  category: 'events' | 'jasorat' | 'lessons' | 'sports' | 'campus';
  image: string;
  caption: Record<Language, string>;
}

export interface Testimonial {
  id: string;
  author: string;
  role: Record<Language, string>;
  text: Record<Language, string>;
  avatar: string;
  year: string;
}

export interface EventItem {
  id: string;
  title: Record<Language, string>;
  date: string; // ISO date format YYYY-MM-DD
  time: string;
  location: Record<Language, string>;
  description: Record<Language, string>;
  category: 'patriotic' | 'academic' | 'sports' | 'meeting';
}
