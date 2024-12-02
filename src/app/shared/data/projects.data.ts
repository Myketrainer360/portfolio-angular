import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with cart functionality and payment integration',
    image: 'assets/project1.jpg',
    technologies: ['Angular', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates',
    image: 'assets/project2.jpg',
    technologies: ['React', 'Firebase', 'Tailwind'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with modern animations',
    image: 'assets/project3.jpg',
    technologies: ['Angular', 'Tailwind', 'TypeScript'],
    demoUrl: '#',
    codeUrl: '#',
  },
];
