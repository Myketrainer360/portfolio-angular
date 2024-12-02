import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { PROJECTS } from '../../shared/data/projects.data';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section
      id="projects"
      class="py-24 bg-gradient-to-r from-blue-500 to-teal-400 text-white"
    >
      <div class="container mx-auto px-4">
        <h2 class="text-4xl  font-bold text-center mb-16 text-yellow-300">
          Featured Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects; track project.title) {
          <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}
