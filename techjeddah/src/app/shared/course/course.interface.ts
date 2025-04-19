// src/app/shared/course.interface.ts

export interface Course {
    course: any;
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    stars: number;
    instructor: string;
    duration: string;
    level: string;
    startDate: Date;
    topics: string[];
  }
  