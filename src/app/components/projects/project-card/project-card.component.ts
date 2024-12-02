import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../shared/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
      (mouseenter)="project.isHovered = true"
      (mouseleave)="project.isHovered = false"
    >
      <div class="relative overflow-hidden group">
        <img
          [src]="project.image"
          [alt]="project.title"
          class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
        >
          <div class="p-4 text-white">
            <div class="flex gap-2">
              @for (tech of project.technologies; track tech) {
              <span class="px-2 py-1 text-xs bg-blue-600 rounded">{{
                tech
              }}</span>
              }
            </div>
          </div>
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 mb-4">{{ project.description }}</p>
        <div class="flex space-x-4">
          <a
            [href]="project.demoUrl"
            class="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
          >
            <span>Live Demo</span>
            <span
              class="ml-1 transform transition-transform"
              [class.translate-x-1]="project.isHovered"
              >→</span
            >
          </a>
          <a
            [href]="project.codeUrl"
            class="text-gray-600 hover:text-gray-800 transition-colors"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  `,
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
