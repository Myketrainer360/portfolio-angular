import { Skill } from '../models/skill.model';

export const SKILLS: Skill[] = [
  { name: 'Angular', level: 90, icon: 'fab fa-angular text-6xl text-red-600' },
  {
    name: 'Databases',
    level: 85,
    icon: 'fas fa-database text-6xl text-purple-500',
  },
  { name: 'Node.js', level: 80, icon: 'fab fa-node text-6xl text-green-500' },
  { name: 'TypeScript', level: 85, icon: 'fas fa-code' },
  { name: 'HTML5', level: 95, icon: 'fab fa-html5 text-6xl text-orange-600' },
  { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt text-6xl text-blue-500' },
  { name: 'JavaScript', level: 90, icon: 'fab fa-js text-6xl text-yellow-500' },
  { name: 'Git', level: 85, icon: 'fab fa-git-alt text-6xl text-orange-500' },
];
